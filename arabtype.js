const ARABIC_LETTER_START = 0x621;
const ARABIC_LETTER_END = 0x64A;

const ISOLATED = 0;
const ENDING = 1;
const INITIAL = 2;
const MEDIAL = 3;

const UNICODE_LAM = 0x644;

//
// 0: isolated form
// 1: ending form
// 2: beginning form	(if 0, it's a cutting type)
// 3: middle form
//
const arabic_forms_b	= [
    [ [0xFE80, 0xFE80,      0,      0], [-1, -1, 0, 0] ],		// hamza	(0)
    [ [0xFE81, 0xFE82,      0,      0], [-1, -1, 0xFEF5, 0xFEF6] ],	// 2alif madda	(1)
    [ [0xFE83, 0xFE84,      0,      0], [-1, -1, 0xFEF7, 0xFEF8] ],	// 2alif hamza	(2)
    [ [0xFE85, 0xFE86,      0,      0], [-1, -1, 0, 0] ],		// waw hamza	(3)
    [ [0xFE87, 0xFE88,      0,      0], [-1, -1, 0xFEF9, 0xFEFA] ],	// 2alif hamza maksoura	(4)
    [ [0xFE89, 0xFE8A, 0xFE8B, 0xFE8C], [-1, -1, 0, 0] ],		// 2alif maqsoura hamza	(5)
    [ [0xFE8D, 0xFE8E,      0,      0], [-1, -1, 0xFEFB, 0xFEFC] ],	// 2alif	(6)
    [ [0xFE8F, 0xFE90, 0xFE91, 0xFE92], [-1, -1, 0, 0] ],		// ba2		(7)
    [ [0xFE93, 0xFE94,      0,      0], [-1, -1, 0, 0] ],		// ta2 marbouta	(8)
    [ [0xFE95, 0xFE96, 0xFE97, 0xFE98], [-1, -1, 0, 0] ],		// ta2		(9)
    [ [0xFE99, 0xFE9A, 0xFE9B, 0xFE9C], [-1, -1, 0, 0] ],		// tha2		(10)
    [ [0xFE9D, 0xFE9E, 0xFE9F, 0xFEA0], [-1, -1, 0, 0] ],		// jim		(11)
    [ [0xFEA1, 0xFEA2, 0xFEA3, 0xFEA4], [-1, -1, 0, 0] ],		// 7a2		(12)
    [ [0xFEA5, 0xFEA6, 0xFEA7, 0xFEA8], [-1, -1, 0, 0] ],		// kha2		(13)
    [ [0xFEA9, 0xFEAA,      0,      0], [-1, -1, 0, 0] ],		// dal		(14)
    [ [0xFEAB, 0xFEAC,      0,      0], [-1, -1, 0, 0] ],		// dhal		(15)
    [ [0xFEAD, 0xFEAE,      0,      0], [-1, -1, 0, 0] ],		// ra2		(16)
    [ [0xFEAF, 0xFEB0,      0,      0], [-1, -1, 0, 0] ],		// zayn		(17)
    [ [0xFEB1, 0xFEB2, 0xFEB3, 0xFEB4], [-1, -1, 0, 0] ],		// syn		(18)
    [ [0xFEB5, 0xFEB6, 0xFEB7, 0xFEB8], [-1, -1, 0, 0] ],		// shin		(19)
    [ [0xFEB9, 0xFEBA, 0xFEBB, 0xFEBC], [-1, -1, 0, 0] ],		// sad		(20)
    [ [0xFEBD, 0xFEBE, 0xFEBF, 0xFEC0], [-1, -1, 0, 0] ],		// dad		(21)
    [ [0xFEC1, 0xFEC2, 0xFEC3, 0xFEC4], [-1, -1, 0, 0] ],		// tah		(22)
    [ [0xFEC5, 0xFEC6, 0xFEC7, 0xFEC8], [-1, -1, 0, 0] ],		// thah		(23)
    [ [0xFEC9, 0xFECA, 0xFECB, 0xFECC], [-1, -1, 0, 0] ],		// 3ayn		(24)
    [ [0xFECD, 0xFECE, 0xFECF, 0xFED0], [-1, -1, 0, 0] ],		// ghayn	(25)
    [ [     0,      0,      0,      0], [-1, -1, 0, 0] ],		//		(26)
    [ [     0,      0,      0,      0], [-1, -1, 0, 0] ],		//		(27)
    [ [     0,      0,      0,      0], [-1, -1, 0, 0] ],		//		(28)
    [ [     0,      0,      0,      0], [-1, -1, 0, 0] ],		//		(29)
    [ [     0,      0,      0,      0], [-1, -1, 0, 0] ],		//		(30)
    [ [ 0x640,  0x640,  0x640,  0x640], [-1, -1, 0, 0] ],		// wasla	(31)
    [ [0xFED1, 0xFED2, 0xFED3, 0xFED4], [-1, -1, 0, 0] ],		// fa2		(32)
    [ [0xFED5, 0xFED6, 0xFED7, 0xFED8], [-1, -1, 0, 0] ],		// qaf		(33)
    [ [0xFED9, 0xFEDA, 0xFEDB, 0xFEDC], [-1, -1, 0, 0] ],		// kaf		(34)
    [ [0xFEDD, 0xFEDE, 0xFEDF, 0xFEE0], [-1, -1, 0, 0] ],		// lam		(35)
    [ [0xFEE1, 0xFEE2, 0xFEE3, 0xFEE4], [-1, -1, 0, 0] ],		// mim		(36)
    [ [0xFEE5, 0xFEE6, 0xFEE7, 0xFEE8], [-1, -1, 0, 0] ],		// noon		(37)
    [ [0xFEE9, 0xFEEA, 0xFEEB, 0xFEEC], [-1, -1, 0, 0] ],		// ha2		(38)
    [ [0xFEED, 0xFEEE,      0,      0], [-1, -1, 0, 0] ],		// waw		(39)
    [ [0xFEEF, 0xFEF0,      0,      0], [-1, -1, 0, 0] ],		// 2alif maksoura	(40)
    [ [0xFEF1, 0xFEF2, 0xFEF3, 0xFEF4], [-1, -1, 0, 0] ],		// ya2		(41)
];

is_arabic_letter = function (cp){
    return ( cp >= ARABIC_LETTER_START && cp <=  ARABIC_LETTER_END )
}

is_lam_alef = function (cp, next) {
    return cp === UNICODE_LAM && is_arabic_letter(next) && arabic_forms_b[next - ARABIC_LETTER_START][1][INITIAL] !== 0;
}

is_alef_prev_lam = function(prev, cp)	{
    return prev === UNICODE_LAM && is_arabic_letter(cp) && arabic_forms_b[cp - ARABIC_LETTER_START][1][INITIAL] !== 0;
}

is_linking_type = function(cp) {
    return is_arabic_letter(cp) && arabic_forms_b[cp - ARABIC_LETTER_START][0][MEDIAL] !== 0;
}

get_presentation_form_b_of_char = function (prev, next, cp) {
    if( !is_arabic_letter(cp) ) {
        return cp;	/* not an Arabic letter */
    }

    let	is_la	= is_lam_alef(cp, next);
    let	is_apl	= is_alef_prev_lam(prev, cp);

    let	is_lapl	= is_la | is_apl;

    if( is_lapl ) {
        let index	= (is_linking_type(cp) << 1) | is_linking_type(prev);
        return arabic_forms_b[next -  ARABIC_LETTER_START][is_lapl][index];

    } else {
        if( is_apl ) {
            return -1;	// skip previously processed lam alef
        } else {
            let index	= ((is_arabic_letter(next) & is_linking_type(cp)) << 1) | is_linking_type(prev);

            return arabic_forms_b[cp -  ARABIC_LETTER_START][is_lapl][index];
        }
    }
    // optimized code
    let index	= (((is_lapl | is_arabic_letter(next)) & is_linking_type(cp)) << 1) | is_linking_type(prev);
    let ref	= next * is_la + cp * (!is_la) - ARABIC_LETTER_START;
    return arabic_forms_b[ref][is_lapl][index];
}


get_presentation_form_b = function (str) {

    let prev	= 0;
    let char = 0;
    let next = 0;

    let chars = str.split('');

    let charsCodes = chars.map(function (charItem) {
        return '0x' + charItem.charCodeAt(0).toString(16)
    });

    let outputChars = [];

    for (let i = 0; i < charsCodes.length; i++) {
        char = charsCodes[i];
        next = i < charsCodes.length ? charsCodes[i + 1] : 0;
        outputChars.push(get_presentation_form_b_of_char(prev, next, char));
        prev = charsCodes.length[i];
    }

    let result = outputChars.map(function(charItem) {
        return String.fromCharCode(charItem);
    }).join('');

    return result;

}
