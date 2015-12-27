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
			if (Math.random()<0.05){
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
	v = v.replace(/\bneat\b/g, "brutal");
	v = v.replace(/\bgood\b/g, "brutal");
	v = v.replace(/\bthanks\b/gi, "thanks (i guess)");
	v = v.replace(/\bbrother\b/g, "brother --I MEANS BANDMATE--");
	v = v.replace(/\bbrothers\b/g, "brothers --I MEANS BANDMATES--");
	v = v.replace(/(:\()/g, "well maybe I should just KILL MYSELF. would THAT be brutal enough for you??");
	v = v.replace(/\bTIL\b/g, "Todays I have learneds");
	v = skwisgaarify(v);
	v = v.replace(/\bfriend\b/g, "pal");
	if (Math.random()<0.1){
		v = v.replace(/\.$/g, ". Well, I guess THATS DOABLE.");
	}
	
	textNode.nodeValue = v;
}


walk(document.body);