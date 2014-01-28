// Copyright (c) 2010 Sven Kreiss, Kyle Cranmer
// Sven Kreiss <sk@svenkreiss.com>, Kyle Cranmer <kyle.cranmer@nyu.edu>
// version 0.6

var replacements = [
    ['\\textfractionsolidus', '\u2044'],
    ['\\leftrightsquigarrow', '\u21AD'],
    ['\\textpertenthousand', '\u2031'],
    ['\\blacktriangleright', '\u25B8'],
    ['\\blacktriangledown', '\u25BE'],
    ['\\blacktriangleleft', '\u25C2'],
    ['\\twoheadrightarrow', '\u21A0'],
    ['\\leftrightharpoons', '\u21CB'],
    ['\\rightleftharpoons', '\u21CC'],
    ['\\textreferencemark', '\u203B'],
    ['\\circlearrowright', '\u21BB'],
    ['\\rightrightarrows', '\u21C9'],
    ['\\vartriangleright', '\u22B3'],
    ['\\textordmasculine', '\u00BA'],
    ['\\textvisiblespace', '\u2423'],
    ['\\twoheadleftarrow', '\u219E'],
    ['\\downharpoonright', '\u21C2'],
    ['\\ntrianglerighteq', '\u22ED'],
    ['\\rightharpoondown', '\u21C1'],
    ['\\textperthousand', '\u2030'],
    ['\\leftrightarrows', '\u21C6'],
    ['\\textmusicalnote', '\u266A'],
    ['\\nleftrightarrow', '\u21AE'],
    ['\\rightleftarrows', '\u21C4'],
    ['\\bigtriangledown', '\u25BD'],
    ['\\textordfeminine', '\u00AA'],
    ['\\ntrianglelefteq', '\u22EC'],
    ['\\rightthreetimes', '\u22CC'],
    ['\\trianglerighteq', '\u22B5'],
    ['\\vartriangleleft', '\u22B2'],
    ['\\rightsquigarrow', '\u21DD'],
    ['\\downharpoonleft', '\u21C3'],
    ['\\curvearrowright', '\u21B7'],
    ['\\circlearrowleft', '\u21BA'],
    ['\\leftharpoondown', '\u21BD'],
    ['\\nLeftrightarrow', '\u21CE'],
    ['\\curvearrowleft', '\u21B6'],
    ['\\guilsinglright', '\u203A'],
    ['\\leftthreetimes', '\u22CB'],
    ['\\leftrightarrow', '\u2194'],
    ['\\rightharpoonup', '\u21C0'],
    ['\\guillemotright', '\u00BB'],
    ['\\downdownarrows', '\u21CA'],
    ['\\hookrightarrow', '\u21AA'],
    ['\\hspace\{0\.25em\}', '\u2005'],
    ['\\dashrightarrow', '\u21E2'],
    ['\\leftleftarrows', '\u21C7'],
    ['\\trianglelefteq', '\u22B4'],
    ['\\ntriangleright', '\u22EB'],
    ['\\doublebarwedge', '\u2306'],
    ['\\upharpoonright', '\u21BE'],
    ['\\rightarrowtail', '\u21A3'],
    ['\\looparrowright', '\u21AC'],
    ['\\Leftrightarrow', '\u21D4'],
    ['\\sphericalangle', '\u2222'],
    ['\\divideontimes', '\u22C7'],
    ['\\measuredangle', '\u2221'],
    ['\\blacktriangle', '\u25B4'],
    ['\\ntriangleleft', '\u22EA'],
    ['\\mathchar"1356', '\u2041'],
    ['\\texttrademark', '\u2122'],
    ['\\mathchar"2208', '\u2316'],
    ['\\triangleright', '\u25B9'],
    ['\\leftarrowtail', '\u21A2'],
    ['\\guilsinglleft', '\u2039'],
    ['\\upharpoonleft', '\u21BF'],
    ['\\mathbb\{gamma\}', '\u213D'],
    ['\\fallingdotseq', '\u2252'],
    ['\\looparrowleft', '\u21AB'],
    ['\\textbrokenbar', '\u00A6'],
    ['\\hookleftarrow', '\u21A9'],
    ['\\smallsetminus', '\uFE68'],
    ['\\dashleftarrow', '\u21E0'],
    ['\\guillemotleft', '\u00AB'],
    ['\\leftharpoonup', '\u21BC'],
    ['\\mathbb\{Gamma\}', '\u213E'],
    ['\\bigtriangleup', '\u25B3'],
    ['\\textcircledP', '\u2117'],
    ['\\risingdotseq', '\u2253'],
    ['\\triangleleft', '\u25C3'],
    ['\\mathsterling', '\u00A3'],
    ['\\textcurrency', '\u00A4'],
    ['\\triangledown', '\u25BF'],
    ['\\blacklozenge', '\uE80B'],
    ['\\sfrac\{5\}\{6\}', '\u215A'],
    ['\\preccurlyeq', '\u227C'],
    ['\\Rrightarrow', '\u21DB'],
    ['\\circledcirc', '\u229A'],
    ['\\nRightarrow', '\u21CF'],
    ['\\sfrac\{3\}\{8\}', '\u215C'],
    ['\\sfrac\{1\}\{3\}', '\u2153'],
    ['\\sfrac\{2\}\{5\}', '\u2156'],
    ['\\vartriangle', '\u25B5'],
    ['\\Updownarrow', '\u21D5'],
    ['\\nrightarrow', '\u219B'],
    ['\\sfrac\{1\}\{2\}', '\u00BD'],
    ['\\sfrac\{3\}\{5\}', '\u2157'],
    ['\\succcurlyeq', '\u227D'],
    ['\\sfrac\{4\}\{5\}', '\u2158'],
    ['\\diamondsuit', '\u2666'],
    ['\\hphantom\{0\}', '\u2007'],
    ['\\sfrac\{1\}\{6\}', '\u2159'],
    ['\\curlyeqsucc', '\u22DF'],
    ['\\blacksquare', '\u25AA'],
    ['\\hphantom\{,\}', '\u2008'],
    ['\\curlyeqprec', '\u22DE'],
    ['\\sfrac\{1\}\{8\}', '\u215B'],
    ['\\sfrac\{7\}\{8\}', '\u215E'],
    ['\\sfrac\{1\}\{5\}', '\u2155'],
    ['\\sfrac\{2\}\{3\}', '\u2154'],
    ['\\updownarrow', '\u2195'],
    ['\\backepsilon', '\u220D'],
    ['\\circleddash', '\u229D'],
    ['\\eqslantless', '\u22DC'],
    ['\\sfrac\{3\}\{4\}', '\u00BE'],
    ['\\sfrac\{5\}\{8\}', '\u215D'],
    ['\\hspace\{1pt\}', '\u200A'],
    ['\\sfrac\{1\}\{4\}', '\u00BC'],
    ['\\mathbb\{Pi\}', '\u213F'],
    ['\\mathcal\{M\}', '\u2133'],
    ['\\nsupseteqq', '\u2289'],
    ['\\mathcal\{B\}', '\u212C'],
    ['\\textrecipe', '\u211E'],
    ['\\nsubseteqq', '\u2288'],
    ['\\subsetneqq', '\u228A'],
    ['\\mathcal\{I\}', '\u2111'],
    ['\\upuparrows', '\u21C8'],
    ['\\mathcal\{e\}', '\u212F'],
    ['\\mathcal\{L\}', '\u2112'],
    ['\\nleftarrow', '\u219A'],
    ['\\mathcal\{H\}', '\u210B'],
    ['\\mathcal\{E\}', '\u2130'],
    ['\\eqslantgtr', '\u22DD'],
    ['\\curlywedge', '\u22CF'],
    ['\\varepsilon', '\u03B5'],
    ['\\supsetneqq', '\u228B'],
    ['\\rightarrow', '\u2192'],
    ['\\mathcal\{R\}', '\u211B'],
    ['\\sqsubseteq', '\u2291'],
    ['\\mathcal\{g\}', '\u210A'],
    ['\\sqsupseteq', '\u2292'],
    ['\\complement', '\u2201'],
    ['\\Rightarrow', '\u21D2'],
    ['\\gtreqqless', '\u22DB'],
    ['\\lesseqqgtr', '\u22DA'],
    ['\\circledast', '\u229B'],
    ['\\nLeftarrow', '\u21CD'],
    ['\\Lleftarrow', '\u21DA'],
    ['\\Leftarrow', '\u21D0'],
    ['\\gvertneqq', '\u2269'],
    ['\\mathbb\{C\}', '\u2102'],
    ['\\supsetneq', '\u228B'],
    ['\\leftarrow', '\u2190'],
    ['\\nleqslant', '\u2270'],
    ['\\mathbb\{Q\}', '\u211A'],
    ['\\mathbb\{Z\}', '\u2124'],
    ['\\llbracket', '\u301A'],
    ['\\mathbb\{H\}', '\u210D'],
    ['\\spadesuit', '\u2660'],
    ['\\mathit\{o\}', '\u2134'],
    ['\\mathbb\{P\}', '\u2119'],
    ['\\rrbracket', '\u301B'],
    ['\\supseteqq', '\u2287'],
    ['\\copyright', '\u00A9'],
    ['\\textsc\{k\}', '\u0138'],
    ['\\gtreqless', '\u22DB'],
    ['\\mathbb\{j\}', '\u2149'],
    ['\\pitchfork', '\u22D4'],
    ['\\estimated', '\u212E'],
    ['\\ngeqslant', '\u2271'],
    ['\\mathbb\{e\}', '\u2147'],
    ['\\therefore', '\u2234'],
    ['\\triangleq', '\u225C'],
    ['\\varpropto', '\u221D'],
    ['\\subsetneq', '\u228A'],
    ['\\heartsuit', '\u2665'],
    ['\\mathbb\{d\}', '\u2146'],
    ['\\lvertneqq', '\u2268'],
    ['\\checkmark', '\u2713'],
    ['\\nparallel', '\u2226'],
    ['\\mathbb\{R\}', '\u211D'],
    ['\\lesseqgtr', '\u22DA'],
    ['\\downarrow', '\u2193'],
    ['\\mathbb\{D\}', '\u2145'],
    ['\\mathbb\{i\}', '\u2148'],
    ['\\backsimeq', '\u22CD'],
    ['\\mathbb\{N\}', '\u2115'],
    ['\\Downarrow', '\u21D3'],
    ['\\subseteqq', '\u2286'],
    ['\\setminus', '\u2216'],
    ['\\succnsim', '\u22E9'],
    ['\\doteqdot', '\u2251'],
    ['\\clubsuit', '\u2663'],
    ['\\emptyset', '\u2205'],
    ['\\sqsupset', '\u2290'],
    ['\\fbox\{~~\}', '\u25AD'],
    ['\\curlyvee', '\u22CE'],
    ['\\varkappa', '\u03F0'],
    ['\\llcorner', '\u231E'],
    ['\\varsigma', '\u03C2'],
    ['\\approxeq', '\u224A'],
    ['\\texteuro', '\u20AC'],
    ['\\backcong', '\u224C'],
    ['\\supseteq', '\u2287'],
    ['\\circledS', '\u24C8'],
    ['\\circledR', '\u00AE'],
    ['\\textcent', '\u00A2'],
    ['\\urcorner', '\u231D'],
    ['\\lrcorner', '\u231F'],
    ['\\boxminus', '\u229F'],
    ['\\vartheta', '\u03D1'],
    ['\\barwedge', '\u22BC'],
    ['\\ding\{86\}', '\u2736'],
    ['\\sqsubset', '\u228F'],
    ['\\subseteq', '\u2286'],
    ['\\intercal', '\u22BA'],
    ['\\ding\{73\}', '\u2606'],
    ['\\ulcorner', '\u231C'],
    ['\\recorder', '\u2315'],
    ['\\precnsim', '\u22E8'],
    ['\\parallel', '\u2225'],
    ['\\boxtimes', '\u22A0'],
    ['\\ding\{55\}', '\u2717'],
    ['\\multimap', '\u22B8'],
    ['\\maltese', '\u2720'],
    ['\\nearrow', '\u2197'],
    ['\\swarrow', '\u2199'],
    ['\\lozenge', '\u25CA'],
    ['\\sqrt\[3\]', '\u221B'],
    ['\\succsim', '\u227F'],
    ['\\tilde\{\}', '\u007E'],
    ['\\lessgtr', '\u2276'],
    ['\\Upsilon', '\u03D2'],
    ['\\Cdprime', '\u042A'],
    ['\\gtrless', '\u2277'],
    ['\\backsim', '\u223D'],
    ['\\nexists', '\u2204'],
    ['\\dotplus', '\u2214'],
    ['\\searrow', '\u2198'],
    ['\\check\{\}', '\u02C7'],
    ['\\lessdot', '\u22D6'],
    ['\\boxplus', '\u229E'],
    ['\\upsilon', '\u03C5'],
    ['\\epsilon', '\u03B5'],
    ['\\diamond', '\u22C4'],
    ['\\bigstar', '\u2605'],
    ['\\ddagger', '\u2021'],
    ['\\cdprime', '\u044A'],
    ['\\Uparrow', '\u21D1'],
    ['\\sqrt\[4\]', '\u221C'],
    ['\\between', '\u226C'],
    ['\\sqangle', '\u221F'],
    ['\\digamma', '\u03DC'],
    ['\\uparrow', '\u2191'],
    ['\\nwarrow', '\u2196'],
    ['\\precsim', '\u227E'],
    ['\\breve\{\}', '\u02D8'],
    ['\\because', '\u2235'],
    ['\\bigcirc', '\u25EF'],
    ['\\grave\{\}', '\u0060'],
    ['\\lesssim', '\u2272'],
    ['\\partial', '\u2202'],
    ['\\acute\{\}', '\u00B4'],
    ['\\natural', '\u266E'],
    ['\\supset', '\u2283'],
    ['\\hstrok', '\u0127'],
    ['\\Tstrok', '\u0166'],
    ['\\coprod', '\u2210'],
    ['\\models', '\u22A7'],
    ['\\otimes', '\u2297'],
    ['\\degree', '\u00B0'],
    ['\\gtrdot', '\u22D7'],
    ['\\preceq', '\u227C'],
    ['\\Lambda', '\u039B'],
    ['\\lambda', '\u03BB'],
    ['\\varrho', '\u03F1'],
    ['\\Bumpeq', '\u224E'],
    ['\\hybull', '\u2043'],
    ['\\lmidot', '\u0140'],
    ['\\nvdash', '\u22AC'],
    ['\\lbrace', '\u007B'],
    ['\\bullet', '\u2022'],
    ['\\varphi', '\u03D5'],
    ['\\bumpeq', '\u224F'],
    ['\\ddot\{\}', '\u00A8'],
    ['\\Lmidot', '\u013F'],
    ['\\Cprime', '\u042C'],
    ['\\female', '\u2640'],
    ['\\rtimes', '\u22CA'],
    ['\\gtrsim', '\u2273'],
    ['\\mapsto', '\u21A6'],
    ['\\daleth', '\u2138'],
    ['\\square', '\u25A0'],
    ['\\nVDash', '\u22AF'],
    ['\\rangle', '\u3009'],
    ['\\tstrok', '\u0167'],
    ['\\oslash', '\u2298'],
    ['\\ltimes', '\u22C9'],
    ['\\lfloor', '\u230A'],
    ['\\marker', '\u25AE'],
    ['\\Subset', '\u22D0'],
    ['\\Vvdash', '\u22AA'],
    ['\\cprime', '\u044C'],
    ['\\propto', '\u221D'],
    ['\\Hstrok', '\u0126'],
    ['\\dlcrop', '\u230D'],
    ['\\forall', '\u2200'],
    ['\\nVdash', '\u22AE'],
    ['\\Supset', '\u22D1'],
    ['\\langle', '\u3008'],
    ['\\ominus', '\u2296'],
    ['\\rfloor', '\u230B'],
    ['\\circeq', '\u2257'],
    ['\\eqcirc', '\u2256'],
    ['\\drcrop', '\u230C'],
    ['\\veebar', '\u22BB'],
    ['\\ulcrop', '\u230F'],
    ['\\nvDash', '\u22AD'],
    ['\\urcrop', '\u230E'],
    ['\\exists', '\u2203'],
    ['\\approx', '\u2248'],
    ['\\dagger', '\u2020'],
    ['\\boxdot', '\u22A1'],
    ['\\succeq', '\u227D'],
    ['\\bowtie', '\u22C8'],
    ['\\subset', '\u2282'],
    ['\\Sigma', '\u03A3'],
    ['\\Omega', '\u03A9'],
    ['\\nabla', '\u2207'],
    ['\\colon', '\u003A'],
    ['\\boxHu', '\u2567'],
    ['\\boxHd', '\u2564'],
    ['\\aleph', '\u2135'],
    ['\\gnsim', '\u22E7'],
    ['\\boxHU', '\u2569'],
    ['\\boxHD', '\u2566'],
    ['\\equiv', '\u2261'],
    ['\\lneqq', '\u2268'],
    ['\\alpha', '\u03B1'],
    ['\\amalg', '\u2210'],
    ['\\boxhU', '\u2568'],
    ['\\boxhD', '\u2565'],
    ['\\uplus', '\u228E'],
    ['\\boxhu', '\u2534'],
    ['\\kappa', '\u03BA'],
    ['\\sigma', '\u03C3'],
    ['\\boxDL', '\u2557'],
    ['\\Theta', '\u0398'],
    ['\\Vdash', '\u22A9'],
    ['\\boxDR', '\u2554'],
    ['\\boxDl', '\u2556'],
    ['\\sqcap', '\u2293'],
    ['\\boxDr', '\u2553'],
    ['\\bar\{\}', '\u00AF'],
    ['\\dashv', '\u22A3'],
    ['\\vDash', '\u22A8'],
    ['\\boxdl', '\u2510'],
    ['\\boxVl', '\u2562'],
    ['\\boxVh', '\u256B'],
    ['\\boxVr', '\u255F'],
    ['\\boxdr', '\u250C'],
    ['\\boxdL', '\u2555'],
    ['\\boxVL', '\u2563'],
    ['\\boxVH', '\u256C'],
    ['\\boxVR', '\u2560'],
    ['\\boxdR', '\u2552'],
    ['\\theta', '\u03B8'],
    ['\\lhblk', '\u2584'],
    ['\\uhblk', '\u2580'],
    ['\\ldotp', '\u002E'],
    ['\\ldots', '\u2026'],
    ['\\boxvL', '\u2561'],
    ['\\boxvH', '\u256A'],
    ['\\boxvR', '\u255E'],
    ['\\boxvl', '\u2524'],
    ['\\boxvh', '\u253C'],
    ['\\boxvr', '\u251C'],
    ['\\Delta', '\u0394'],
    ['\\boxUR', '\u255A'],
    ['\\boxUL', '\u255D'],
    ['\\oplus', '\u2295'],
    ['\\boxUr', '\u2559'],
    ['\\boxUl', '\u255C'],
    ['\\doteq', '\u2250'],
    ['\\happy', '\u32E1'],
    ['\\varpi', '\u03D6'],
    ['\\boxur', '\u2514'],
    ['\\smile', '\u263A'],
    ['\\boxul', '\u2518'],
    ['\\simeq', '\u2243'],
    ['\\boxuR', '\u2558'],
    ['\\boxuL', '\u255B'],
    ['\\boxhd', '\u252C'],
    ['\\gimel', '\u2137'],
    ['\\Gamma', '\u0393'],
    ['\\lnsim', '\u22E6'],
    ['\\sqcup', '\u2294'],
    ['\\omega', '\u03C9'],
    ['\\sharp', '\u266F'],
    ['\\times', '\u00D7'],
    ['\\block', '\u2588'],
    ['\\wedge', '\u2227'],
    ['\\vdash', '\u22A2'],
    ['\\angle', '\u2220'],
    ['\\infty', '\u221E'],
    ['\\gamma', '\u03B3'],
    ['\\asymp', '\u224D'],
    ['\\rceil', '\u2309'],
    ['\\dot\{\}', '\u02D9'],
    ['\\lceil', '\u2308'],
    ['\\delta', '\u03B4'],
    ['\\gneqq', '\u2269'],
    ['\\hat\{\}', '\u005E'],
    ['\\frown', '\u2322'],
    ['\\phone', '\u260E'],
    ['\\vdots', '\u22EE'],
    ['\\perp', '\u22A5'],
    ['\\surd', '\u221A'],
    ['\\vert', '\u007C'],
    ['\\prec', '\u227A'],
    ['\\mldr', '\u2026'],
    ['\\cong', '\u2245'],
    ['\\star', '\u002A'],
    ['\\geqq', '\u2267'],
    ['\\cdot', '\u22C5'],
    ['\\Vert', '\u2016'],
    ['\\lnot', '\u00AC'],
    ['\\leqq', '\u2266'],
    ['\\beta', '\u03B2'],
    ['\\beth', '\u2136'],
    ['\\prod', '\u220F'],
    ['\\circ', '\u2218'],
    ['\\flat', '\u266D'],
    ['\\oint', '\u222E'],
    ['\\not<', '\u226E'],
    ['\\not>', '\u226F'],
    ['\\not=', '\u2260'],
    ['\\odot', '\u2299'],
    ['\\nldr', '\u2025'],
    ['\\nmid', '\u2224'],
    ['\\zeta', '\u03B6'],
    ['\\iota', '\u03B9'],
    ['\\gneq', '\u2269'],
    ['\\boxH', '\u2550'],
    ['\\hbar', '\u210F'],
    ['\\boxv', '\u2502'],
    ['\\boxh', '\u2500'],
    ['\\male', '\u2642'],
    ['\\sqrt', '\u221A'],
    ['\\succ', '\u227B'],
    ['\\lneq', '\u2268'],
    ['\\boxV', '\u2551'],
    ['\\quad', '\u2003'],
    ['\\leq', '\u2264'],
    ['\\Cup', '\u22D3'],
    ['\\Psi', '\u03A8'],
    ['\\neq', '\u2260'],
    ['\\k\{\}', '\u02DB'],
    ['\\=\{\}', '\u203E'],
    ['\\H\{\}', '\u02DD'],
    ['\\cup', '\u222A'],
    ['\\c\{\}', '\u00B8'],
    ['\\geq', '\u2265'],
    ['\\mho', '\u2127'],
    ['\\Dzh', '\u040F'],
    ['\\cap', '\u2229'],
    ['\\bot', '\u22A5'],
    ['\\psi', '\u03C8'],
    ['\\chi', '\u03C7'],
    ['\\Phi', '\u03A6'],
    ['\\dzh', '\u045F'],
    ['\\ast', '\u002A'],
    ['\\ell', '\u2113'],
    ['\\top', '\u22A4'],
    ['\\lll', '\u22D8'],
    ['\\tau', '\u03C4'],
    ['\\Cap', '\u22D2'],
    ['\\sad', '\u2639'],
    ['\\iff', '\u21D4'],
    ['\\eta', '\u03B7'],
    ['\\eth', '\u00F0'],
    ['\\d\{\}', '\u0323'],
    ['\\rho', '\u03C1'],
    ['\\div', '\u00F7'],
    ['\\phi', '\u03C6'],
    ['\\Rsh', '\u21B1'],
    ['\\vee', '\u2228'],
    ['\\b\{\}', '\u02CD'],
    ['\\t\{\}', '\u0361'],
    ['\\int', '\u222B'],
    ['\\sim', '\u223C'],
    ['\\r\{\}', '\u02DA'],
    ['\\Lsh', '\u21B0'],
    ['\\yen', '\u00A5'],
    ['\\ggg', '\u22D9'],
    ['\\mid', '\u2223'],
    ['\\sum', '\u2211'],
    ['\\Re', '\u211C'],
    ['\\oe', '\u0153'],
    ['\\DH', '\u00D0'],
    ['\\ll', '\u226A'],
    ['\\ng', '\u014B'],
    ['\\wr', '\u2240'],
    ['\\wp', '\u2118'],
    ['\\=I', '\u0406'],
    ['\\:\)', '\u263A'],
    ['\\:\(', '\u2639'],
    ['\\:G', '\u32E1'],
    ['\\AE', '\u00C6'],
    ['\\AA', '\u00C5'],
    ['\\ss', '\u00DF'],
    ['\\dz', '\u0455'],
    ['\\ae', '\u00E6'],
    ['\\aa', '\u00E5'],
    ['\\th', '\u00FE'],
    ['\\to', '\u2192'],
    ['\\Pi', '\u03A0'],
    ['\\mp', '\u2213'],
    ['\\Im', '\u2111'],
    ['\\pm', '\u00B1'],
    ['\\pi', '\u03C0'],
    ['\\"I', '\u0407'],
    ['\\\'C', '\u040B'],
    ['\\in', '\u2208'],
    ['\\\'K', '\u040C'],
    ['\\\'k', '\u045C'],
    ['\\\'c', '\u045B'],
    ['\\\'g', '\u0453'],
    ['\\ni', '\u220B'],
    ['\\ne', '\u2260'],
    ['\\OE', '\u0152'],
    ['\\Xi', '\u039E'],
    ['\\nu', '\u03BD'],
    ['\\NG', '\u014A'],
    ['\\xi', '\u03BE'],
    ['\\gg', '\u226B'],
    ['\\Dz', '\u0405'],
    ['\\\'G', '\u0403'],
    ['\\DJ', '\u0110'],
    ['\\=e', '\u0454'],
    ['\\=E', '\u0404'],
    ['\\mu', '\u03BC'],
    ['\\dj', '\u0111'],
    ['\\TH', '\u00DE'],
    ['\\:', '\u2004'],
    ['\\;', '\u2002'],
    ['\\&', '\u0026'],
    ['\\\$', '\u0024'],
    ['\\%', '\u0025'],
    ['\\#', '\u0023'],
    ['\\,', '\u2009'],
    ['\\-', '\u00AD'],
    ['\\S', '\u00A7'],
    ['\\P', '\u00B6'],
    ['\\O', '\u00D8'],
    ['\\L', '\u0141'],
    ['\\\}', '\u007D'],
    ['\\o', '\u00F8'],
    ['\\l', '\u0142'],
    ['\\h', '\u210E'],
    ['\\i', '\u2139'],
];
var combiningmarks = [
    ['\\tilde', '\u0303'],
    ['\\grave', '\u0300'],
    ['\\dot', '\u0307'],
    ['\\acute', '\u0301'],
    ['\\doubleunderline', '\u0333'],
    ['\\ddot', '\u0308'],
    ['\\slash', '\u0338'],
    ['\\overline', '\u0305'],
    ['\\vec', '\u20D7'],
    ['\\hat', '\u0302'],
    ['\\breve', '\u0306'],
    ['\\underline', '\u0332'],
    ['\\strikethrough', '\u0335'],
    ['\\bar', '\u0305'],
];
var subsuperscripts = [
    ['_x', '\u2093'],
    ['_v', '\u1D65'],
    ['_u', '\u1D64'],
    ['_t', '\u209C'],
    ['_s', '\u209B'],
    ['_r', '\u1D63'],
    ['_p', '\u209A'],
    ['_o', '\u2092'],
    ['_n', '\u2099'],
    ['_m', '\u2098'],
    ['_l', '\u2097'],
    ['_k', '\u2096'],
    ['_j', '\u2C7C'],
    ['_i', '\u1D62'],
    ['_h', '\u2095'],
    ['_e', '\u2091'],
    ['_a', '\u2090'],
    ['\^\u222B', '\u1DB4'],
    ['_>', '\u02F2'],
    ['_=', '\u208C'],
    ['_<', '\u02F1'],
    ['_9', '\u2089'],
    ['_8', '\u2088'],
    ['_7', '\u2087'],
    ['_6', '\u2086'],
    ['_5', '\u2085'],
    ['_4', '\u2084'],
    ['_3', '\u2083'],
    ['_2', '\u2082'],
    ['_1', '\u2081'],
    ['_0', '\u2080'],
    ['_-', '\u208B'],
    ['_\+', '\u208A'],
    ['_\)', '\u208E'],
    ['_\(', '\u208D'],
    ['_\u03C1', '\u1D68'],
    ['_\u03C7', '\u1D6A'],
    ['_\u03C6', '\u1D69'],
    ['_\u03B2', '\u1D66'],
    ['_\u03B3', '\u1D67'],
    ['\^\u03C6', '\u1D60'],
    ['\^\u03C7', '\u1D61'],
    ['\^\u03B4', '\u1D5F'],
    ['\^\u03B3', '\u1D5E'],
    ['\^\u03B2', '\u1D5D'],
    ['\^8', '\u2078'],
    ['\^9', '\u2079'],
    ['\^<', '\u02C2'],
    ['\^=', '\u207C'],
    ['\^>', '\u02C3'],
    ['\^0', '\u2070'],
    ['\^1', '\u00B9'],
    ['\^2', '\u00B2'],
    ['\^3', '\u00B3'],
    ['\^4', '\u2074'],
    ['\^5', '\u2075'],
    ['\^6', '\u2076'],
    ['\^7', '\u2077'],
    ['\^\(', '\u207D'],
    ['\^\)', '\u207E'],
    ['\^\*', '\u002A'],
    ['\^\+', '\u207A'],
    ['\^-', '\u207B'],
    ['\^P', '\u1D3E'],
    ['\^R', '\u1D3F'],
    ['\^T', '\u1D40'],
    ['\^U', '\u1D41'],
    ['\^V', '\u1111'],
    ['\^W', '\u1D42'],
    ['\^H', '\u1D34'],
    ['\^I', '\u1D35'],
    ['\^J', '\u1D36'],
    ['\^K', '\u1D37'],
    ['\^L', '\u1D38'],
    ['\^M', '\u1D39'],
    ['\^N', '\u1D3A'],
    ['\^O', '\u1D3C'],
    ['\^A', '\u1D2C'],
    ['\^B', '\u1D2E'],
    ['\^D', '\u1D30'],
    ['\^E', '\u1D31'],
    ['\^G', '\u1D33'],
    ['\^x', '\u02E3'],
    ['\^y', '\u02B8'],
    ['\^z', '\u1DBB'],
    ['\^p', '\u1D56'],
    ['\^r', '\u02B3'],
    ['\^s', '\u02E2'],
    ['\^t', '\u1D57'],
    ['\^u', '\u1D58'],
    ['\^v', '\u1D5B'],
    ['\^w', '\u02B7'],
    ['\^h', '\u02B0'],
    ['\^i', '\u2071'],
    ['\^j', '\u02B2'],
    ['\^k', '\u1D4F'],
    ['\^l', '\u02E1'],
    ['\^m', '\u1D50'],
    ['\^n', '\u207F'],
    ['\^o', '\u1D52'],
    ['\^a', '\u1D43'],
    ['\^b', '\u1D47'],
    ['\^c', '\u1D9C'],
    ['\^d', '\u1D48'],
    ['\^e', '\u1D49'],
    ['\^f', '\u1DA0'],
    ['\^g', '\u1D4D'],
];


var replace = function(inp) {
    return inp.map( function(f) {
        // escape combining marks with a space after the backslash
        for( ic in combiningmarks ) {
            var c = combiningmarks[ic];

            var i = -1;
            while( (i = f.indexOf(c[0],i+1)) > -1   &&   f.indexOf("}") > i ) {
                f = f.slice(0,i+1)+' '+f.slice(i+1);
            }
        }

        // console.log(replacements);            
        for( ir in replacements ) {
            var r = replacements[ir];
            // dirty way of a replaceAll():
            f = f.split(r[0]).join(r[1]);
        }


        // expand groups of subscripts: _{01234}    
        var i = -1;
        while( (i = f.indexOf("_{")) > -1   &&   f.indexOf("}") > i ) {
            f = f.slice(0,i)+'_'+f[i+2]+'_{'+f.slice(i+3);
            f = f.replace('_{}','');
        }
            
        // expand groups of superscripts: ^{01234}    
        var i = -1;
        while( (i = f.indexOf("^{")) > -1   &&   f.indexOf("}") > i ) {
            f = f.slice(0,i)+'^'+f[i+2]+'^{'+f.slice(i+3);
            f = f.replace('^{}','');
        }
        
        // now replace subsuperscripts
        for( ir in subsuperscripts ) {
            var r = subsuperscripts[ir];
            // dirty way of a replaceAll():
            f = f.split(r[0]).join(r[1]);
        }


        // combining marks (unicode char modifies previous char)
        var i = -1;
        for( ic in combiningmarks ) {
            var c = combiningmarks[ic];

            var i = -1;
            while( (i = f.indexOf('\\ '+c[0].slice(1)+'{',i+1)) > -1   &&   f.indexOf("}") > i ) {
                var newString = f[i+c[0].length+2] + c[1];
                f = f.slice(0,i)+newString+f.slice(i+1+c[0].length+3);
            }
        }

        return f;
    });
};

