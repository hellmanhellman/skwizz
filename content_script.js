

function skwisgaarify(str){
    return(
        str.replace( 
            new RegExp("([cydrtpgklvbnm](?= ))", "gi"), 
            // Add the character s at the end of some random words (40% chance)
            function($1){ 
                if (Math.random() < 0.4){
                    return( $1+"s" );
                } else {
                    return( $1 );
                }
            }
        )
    );
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			if (Math.random()<0.1){
			handleText(node);
			}
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bis\b/g, "ams");
	v = v.replace(/\bam\b/g, "ams");
	v = v.replace(/\bfriends\b/g, "pals");
	v = v.replace(/\bthat\b/g, "thats");
	v = v.replace(/\bcool\b/g, "brutal");
	v = v.replace(/\bTIL\b/g, "Todays I have learneds");
	v = skwisgaarify(v);
	v = v.replace(/\bfriend\b/g, "pal");
	if (Math.random()<0.1){
		v = v.replace(/\.$/g, ". Well, I guess THATS DOABLE.");
	}
	
	textNode.nodeValue = v;
}


walk(document.body);
