export const DEFAULT_SLEEP_TIME = 2;
export var ANIMATION_TYPES;
(function (ANIMATION_TYPES) {
    ANIMATION_TYPES["RAINBOW"] = "rainbow";
    ANIMATION_TYPES["PULSE"] = "pulse";
    ANIMATION_TYPES["GLITCH"] = "glitch";
    ANIMATION_TYPES["NEON"] = "neon";
    ANIMATION_TYPES["RADAR"] = "radar";
})(ANIMATION_TYPES || (ANIMATION_TYPES = {}));
export var COLOR_TYPES;
(function (COLOR_TYPES) {
    COLOR_TYPES["RED"] = "red";
    COLOR_TYPES["GREEN"] = "green";
    COLOR_TYPES["BLUE"] = "blue";
    COLOR_TYPES["YELLOW"] = "yellow";
    COLOR_TYPES["MAGENTA"] = "magenta";
    COLOR_TYPES["CYAN"] = "cyan";
    COLOR_TYPES["WHITE"] = "white";
    COLOR_TYPES["BLACK"] = "black";
    COLOR_TYPES["BG_RED"] = "bgRed";
})(COLOR_TYPES || (COLOR_TYPES = {}));
export var GRADIENT_TYPES;
(function (GRADIENT_TYPES) {
    GRADIENT_TYPES["ATLAS"] = "atlas";
    GRADIENT_TYPES["CRISTAL"] = "cristal";
    GRADIENT_TYPES["TEEN"] = "teen";
    GRADIENT_TYPES["MIND"] = "mind";
    GRADIENT_TYPES["MORNING"] = "morning";
    GRADIENT_TYPES["VICE"] = "vice";
    GRADIENT_TYPES["PASSION"] = "passion";
    GRADIENT_TYPES["FRUIT"] = "fruit";
    GRADIENT_TYPES["INSTAGRAM"] = "instagram";
    GRADIENT_TYPES["RETRO"] = "retro";
    GRADIENT_TYPES["SUMMER"] = "summer";
    GRADIENT_TYPES["RAINBOW"] = "rainbow";
    GRADIENT_TYPES["PASTEL"] = "pastel";
})(GRADIENT_TYPES || (GRADIENT_TYPES = {}));
export var QUESTION_TYPES;
(function (QUESTION_TYPES) {
    QUESTION_TYPES["LIST"] = "list";
    QUESTION_TYPES["RAWLIST"] = "rawlist";
    QUESTION_TYPES["EXPAND"] = "expand";
    QUESTION_TYPES["CHECKBOX"] = "checkbox";
    QUESTION_TYPES["CONFIRM"] = "confirm";
    QUESTION_TYPES["INPUT"] = "input";
    QUESTION_TYPES["NUMBER"] = "number";
    QUESTION_TYPES["PASSWORD"] = "password";
    QUESTION_TYPES["EDITOR"] = "editor";
})(QUESTION_TYPES || (QUESTION_TYPES = {}));
export const MESSAGES = {
    WELCOME: "WELCOME  TO  BONGCLOUD",
    RULER: "____________________________________________________________________________________________________________________ \n ____________________________________________________________________________________________________________________",
    ASK_NAME: "Your Name:",
    INTRO: "🚀✨ Say hello to Bongcloud, your ultimate boredom buster! \n",
    MODULE_SELECTION: "🎁✨ Dive into our delightful menu and pick your favorite treat from the list below! \n",
    LANGUAGE_SELECTION: "To which language you wanna translate?",
    TEXT_TO_BE_TRANSLATTED: "Type in what you wanna translate..",
    TEXT_SIZE_ERROR: "Text size limit error",
    LOADING: "Loading....",
    STILL_IN_PROGRESS: "Still in progress... 🙂",
};
export const MODULE_TYPES = {
    TYPING_SPEED: "Check your typing speed",
    TRANSLATOR: "Translate your message",
    WEATHER: "Check weather",
    FIGLET: "Generate a designer text",
    TIC_TAC_TOE: "Play tic-tac-toe",
    HANGMAN: "Play hangman",
    NOTIFICATION: "Send notification to the author",
    LINKEDIN: "View the author's linkedin",
    EXIT: "Exit",
};
export const moduleList = Object.values(MODULE_TYPES);
export var FIGLET_TYPES;
(function (FIGLET_TYPES) {
    FIGLET_TYPES["3D_DIAGONAL"] = "3D Diagonal";
    FIGLET_TYPES["ALPHA"] = "Alpha";
    FIGLET_TYPES["ACROBATIC"] = "Acrobatic";
    FIGLET_TYPES["AVATAR"] = "Avatar";
    FIGLET_TYPES["BABYFACE_LAME"] = "Babyface Lame";
    FIGLET_TYPES["BABYFACE_LEET"] = "Babyface Leet";
    FIGLET_TYPES["BIG_MONEY_NE"] = "Big Money-ne";
    FIGLET_TYPES["BIG_MONEY_NW"] = "Big Money-nw";
    FIGLET_TYPES["BIG_MONEY_SE"] = "Big Money-se";
    FIGLET_TYPES["BIG_MONEY_SW"] = "Big Money-sw";
    FIGLET_TYPES["BIG"] = "Big";
    FIGLET_TYPES["BLOCKS"] = "Blocks";
    FIGLET_TYPES["BLURVISION_ASCII"] = "BlurVision ASCII";
    FIGLET_TYPES["BULBHEAD"] = "Bulbhead";
    FIGLET_TYPES["CARDS"] = "Cards";
    FIGLET_TYPES["CHISELED"] = "Chiseled";
    FIGLET_TYPES["CRAWFORD2"] = "Crawford2";
    FIGLET_TYPES["CRAZY"] = "Crazy";
    FIGLET_TYPES["DANCING_FONT"] = "Dancing Font";
    FIGLET_TYPES["DOH"] = "Doh";
    FIGLET_TYPES["DOOM"] = "Doom";
    FIGLET_TYPES["EFTI_WALL"] = "Efti Wall";
    FIGLET_TYPES["EPIC"] = "Epic";
    FIGLET_TYPES["FIRE_FONT_K"] = "Fire Font-k";
    FIGLET_TYPES["FIRE_FONT_S"] = "Fire Font-s";
    FIGLET_TYPES["FLOWER_POWER"] = "Flower Power";
    FIGLET_TYPES["FUN_FACE"] = "Fun Face";
    FIGLET_TYPES["FUN_FACES"] = "Fun Faces";
    FIGLET_TYPES["GHOST"] = "Ghost";
    FIGLET_TYPES["GRACEFUL"] = "Graceful";
    FIGLET_TYPES["GRAFFITI"] = "Graffiti";
    FIGLET_TYPES["IMPOSSIBLE"] = "Impossible";
    FIGLET_TYPES["ISOMETRIC1"] = "Isometric1";
    FIGLET_TYPES["ISOMETRIC2"] = "Isometric2";
    FIGLET_TYPES["ISOMETRIC3"] = "Isometric3";
    FIGLET_TYPES["ISOMETRIC4"] = "Isometric4";
    FIGLET_TYPES["JS_BRACKET_LETTERS"] = "JS Bracket Letters";
    FIGLET_TYPES["LIL_DEVIL"] = "Lil Devil";
    FIGLET_TYPES["MERLIN1"] = "Merlin1";
    FIGLET_TYPES["MODULAR"] = "Modular";
    FIGLET_TYPES["OGRE"] = "Ogre";
    FIGLET_TYPES["PATORJK_CHEESE"] = "Patorjk's Cheese";
    FIGLET_TYPES["PATORJK_HEX"] = "Patorjk-HeX";
    FIGLET_TYPES["RECTANGLES"] = "Rectangles";
    FIGLET_TYPES["SHADED_BLOCKY"] = "Shaded Blocky";
    FIGLET_TYPES["SLANT"] = "Slant";
    FIGLET_TYPES["SLANT_RELIEF"] = "Slant Relief";
    FIGLET_TYPES["SMALL"] = "Small";
    FIGLET_TYPES["SMALL_SLANT"] = "Small Slant";
    FIGLET_TYPES["SMALL_ISOMETRIC1"] = "Small Isometric1";
    FIGLET_TYPES["SOFT"] = "Soft";
    FIGLET_TYPES["STANDARD"] = "Standard";
    FIGLET_TYPES["STAR_WARS"] = "Star Wars";
    FIGLET_TYPES["SUB_ZERO"] = "Sub-Zero";
    FIGLET_TYPES["SWAMP_LAND"] = "Swamp Land";
    FIGLET_TYPES["SWEET"] = "Sweet";
    FIGLET_TYPES["TMPLR"] = "Tmplr";
    FIGLET_TYPES["TRAIN"] = "Train";
    FIGLET_TYPES["TWISTED"] = "Twisted";
    FIGLET_TYPES["WET_LETTER"] = "Wet Letter";
    FIGLET_TYPES["VARSITY"] = "Varsity";
    FIGLET_TYPES["3D_ASCII"] = "3D-ASCII";
    FIGLET_TYPES["ANSI_REGULAR"] = "ANSI Regular";
    FIGLET_TYPES["ANSI_SHADOW"] = "ANSI Shadow";
    FIGLET_TYPES["BLOODY"] = "Bloody";
    FIGLET_TYPES["CALVIN_S"] = "Calvin S";
    FIGLET_TYPES["DELTA_CORPS_PRIEST_1"] = "Delta Corps Priest 1";
    FIGLET_TYPES["ELECTRONIC"] = "Electronic";
    FIGLET_TYPES["ELITE"] = "Elite";
    FIGLET_TYPES["STRONGER_THAN_ALL"] = "Stronger Than All";
    FIGLET_TYPES["THIS"] = "THIS";
    FIGLET_TYPES["THE_EDGE"] = "The Edge";
    FIGLET_TYPES["1ROW"] = "1Row";
    FIGLET_TYPES["3_D"] = "3-D";
    FIGLET_TYPES["3X5"] = "3x5";
    FIGLET_TYPES["4MAX"] = "4Max";
    FIGLET_TYPES["5_LINE_OBLIQUE"] = "5 Line Oblique";
    FIGLET_TYPES["AMC_3_LINE"] = "AMC 3 Line";
    FIGLET_TYPES["AMC_3_LIV1"] = "AMC 3 Liv1";
    FIGLET_TYPES["AMC_AAA01"] = "AMC AAA01";
    FIGLET_TYPES["AMC_NEKO"] = "AMC Neko";
    FIGLET_TYPES["AMC_RAZOR"] = "AMC Razor";
    FIGLET_TYPES["AMC_RAZOR2"] = "AMC Razor2";
    FIGLET_TYPES["AMC_SLASH"] = "AMC Slash";
    FIGLET_TYPES["AMC_SLIDER"] = "AMC Slider";
    FIGLET_TYPES["AMC_THIN"] = "AMC Thin";
    FIGLET_TYPES["AMC_TUBES"] = "AMC Tubes";
    FIGLET_TYPES["AMC_UNTITLED"] = "AMC Untitled";
    FIGLET_TYPES["ASCII_NEW_ROMAN"] = "ASCII New Roman";
    FIGLET_TYPES["ALLIGATOR"] = "Alligator";
    FIGLET_TYPES["ALLIGATOR2"] = "Alligator2";
    FIGLET_TYPES["ALPHABET"] = "Alphabet";
    FIGLET_TYPES["ARROWS"] = "Arrows";
    FIGLET_TYPES["BANNER"] = "Banner";
    FIGLET_TYPES["BANNER3_D"] = "Banner3-D";
    FIGLET_TYPES["BANNER3"] = "Banner3";
    FIGLET_TYPES["BANNER4"] = "Banner4";
    FIGLET_TYPES["BARBWIRE"] = "Barbwire";
    FIGLET_TYPES["BASIC"] = "Basic";
    FIGLET_TYPES["BEAR"] = "Bear";
    FIGLET_TYPES["BELL"] = "Bell";
    FIGLET_TYPES["BENJAMIN"] = "Benjamin";
    FIGLET_TYPES["BIG_CHIEF"] = "Big Chief";
    FIGLET_TYPES["BIGFIG"] = "Bigfig";
    FIGLET_TYPES["BINARY"] = "Binary";
    FIGLET_TYPES["BLOCK"] = "Block";
    FIGLET_TYPES["BOLGER"] = "Bolger";
    FIGLET_TYPES["BRACED"] = "Braced";
    FIGLET_TYPES["BRIGHT"] = "Bright";
    FIGLET_TYPES["BROADWAY_KB"] = "Broadway KB";
    FIGLET_TYPES["BROADWAY"] = "Broadway";
    FIGLET_TYPES["BUBBLE"] = "Bubble";
    FIGLET_TYPES["CALIGRAPHY"] = "Caligraphy";
    FIGLET_TYPES["CALIGRAPHY2"] = "Caligraphy2";
    FIGLET_TYPES["CATWALK"] = "Catwalk";
    FIGLET_TYPES["CHUNKY"] = "Chunky";
    FIGLET_TYPES["COINSTAK"] = "Coinstak";
    FIGLET_TYPES["COLA"] = "Cola";
    FIGLET_TYPES["COLOSSAL"] = "Colossal";
    FIGLET_TYPES["COMPUTER"] = "Computer";
    FIGLET_TYPES["CONTESSA"] = "Contessa";
    FIGLET_TYPES["CONTRAST"] = "Contrast";
    FIGLET_TYPES["COSMIKE"] = "Cosmike";
    FIGLET_TYPES["CRAWFORD"] = "Crawford";
    FIGLET_TYPES["CRICKET"] = "Cricket";
    FIGLET_TYPES["CURSIVE"] = "Cursive";
    FIGLET_TYPES["CYBERLARGE"] = "Cyberlarge";
    FIGLET_TYPES["CYBERMEDIUM"] = "Cybermedium";
    FIGLET_TYPES["CYBERSMALL"] = "Cybersmall";
    FIGLET_TYPES["CYGNET"] = "Cygnet";
    FIGLET_TYPES["DANC4"] = "DANC4";
    FIGLET_TYPES["DWHISTLED"] = "DWhistled";
    FIGLET_TYPES["DECIMAL"] = "Decimal";
    FIGLET_TYPES["DEF_LEPPARD"] = "Def Leppard";
    FIGLET_TYPES["DIAMOND"] = "Diamond";
    FIGLET_TYPES["DIET_COLA"] = "Diet Cola";
    FIGLET_TYPES["DIGITAL"] = "Digital";
    FIGLET_TYPES["DOT_MATRIX"] = "Dot Matrix";
    FIGLET_TYPES["DOUBLE_SHORTS"] = "Double Shorts";
    FIGLET_TYPES["DOUBLE"] = "Double";
    FIGLET_TYPES["DR_PEPPER"] = "Dr Pepper";
    FIGLET_TYPES["EFTI_CHESS"] = "Efti Chess";
    FIGLET_TYPES["EFTI_FONT"] = "Efti Font";
    FIGLET_TYPES["EFTI_ITALIC"] = "Efti Italic";
    FIGLET_TYPES["EFTI_PITI"] = "Efti Piti";
    FIGLET_TYPES["EFTI_ROBOT"] = "Efti Robot";
    FIGLET_TYPES["EFTI_WATER"] = "Efti Water";
    FIGLET_TYPES["FENDER"] = "Fender";
    FIGLET_TYPES["FILTER"] = "Filter";
    FIGLET_TYPES["FLIPPED"] = "Flipped";
    FIGLET_TYPES["FOUR_TOPS"] = "Four Tops";
    FIGLET_TYPES["FRAKTUR"] = "Fraktur";
    FIGLET_TYPES["FUZZY"] = "Fuzzy";
    FIGLET_TYPES["GEORGI16"] = "Georgi16";
    FIGLET_TYPES["GEORGIA11"] = "Georgia11";
    FIGLET_TYPES["GHOULISH"] = "Ghoulish";
    FIGLET_TYPES["GLENYN"] = "Glenyn";
    FIGLET_TYPES["GOOFY"] = "Goofy";
    FIGLET_TYPES["GOTHIC"] = "Gothic";
    FIGLET_TYPES["GRADIENT"] = "Gradient";
    FIGLET_TYPES["GREEK"] = "Greek";
    FIGLET_TYPES["HEART_LEFT"] = "Heart Left";
    FIGLET_TYPES["HEART_RIGHT"] = "Heart Right";
    FIGLET_TYPES["HENRY_3D"] = "Henry 3D";
    FIGLET_TYPES["HEX"] = "Hex";
    FIGLET_TYPES["HIEROGLYPHS"] = "Hieroglyphs";
    FIGLET_TYPES["HOLLYWOOD"] = "Hollywood";
    FIGLET_TYPES["HORIZONTAL_LEFT"] = "Horizontal Left";
    FIGLET_TYPES["HORIZONTAL_RIGHT"] = "Horizontal Right";
    FIGLET_TYPES["ICL_1900"] = "ICL-1900";
    FIGLET_TYPES["INVITA"] = "Invita";
    FIGLET_TYPES["ITALIC"] = "Italic";
    FIGLET_TYPES["IVRIT"] = "Ivrit";
    FIGLET_TYPES["JS_BLOCK_LETTERS"] = "JS Block Letters";
    FIGLET_TYPES["JS_CAPITAL_CURVES"] = "JS Capital Curves";
    FIGLET_TYPES["JS_CURSIVE"] = "JS Cursive";
    FIGLET_TYPES["JS_STICK_LETTERS"] = "JS Stick Letters";
    FIGLET_TYPES["JACKY"] = "Jacky";
    FIGLET_TYPES["JAZMINE"] = "Jazmine";
    FIGLET_TYPES["JERUSALEM"] = "Jerusalem";
    FIGLET_TYPES["KATAKANA"] = "Katakana";
    FIGLET_TYPES["KBAN"] = "Kban";
    FIGLET_TYPES["KEYBOARD"] = "Keyboard";
    FIGLET_TYPES["KNOB"] = "Knob";
    FIGLET_TYPES["LCD"] = "LCD";
    FIGLET_TYPES["LARRY_3D"] = "Larry 3D";
    FIGLET_TYPES["LEAN"] = "Lean";
    FIGLET_TYPES["LETTERS"] = "Letters";
    FIGLET_TYPES["LINE_BLOCKS"] = "Line Blocks";
    FIGLET_TYPES["LINUX"] = "Linux";
})(FIGLET_TYPES || (FIGLET_TYPES = {}));
const LANGUAGE_TYPES = {
    "Amharic": "am",
    "Arabic": "ar",
    "Basque": "eu",
    "Bengali": "bn",
    "English (UK)": "en-GB",
    "Portuguese (Brazil)": "pt-BR",
    "Bulgarian": "bg",
    "Catalan": "ca",
    "Cherokee": "chr",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dutch": "nl",
    "English (US)": "en",
    "Estonian": "et",
    "Filipino": "fil",
    "Finnish": "fi",
    "French": "fr",
    "German": "de",
    "Greek": "el",
    "Gujarati": "gu",
    "Hebrew": "iw",
    "Hindi": "hi",
    "Hungarian": "hu",
    "Icelandic": "is",
    "Indonesian": "id",
    "Italian": "it",
    "Japanese": "ja",
    "Kannada": "kn",
    "Korean": "ko",
    "Latvian": "lv",
    "Lithuanian": "lt",
    "Malay": "ms",
    "Malayalam": "ml",
    "Marathi": "mr",
    "Norwegian": "no",
    "Polish": "pl",
    "Portuguese (Portugal)": "pt-PT",
    "Romanian": "ro",
    "Russian": "ru",
    "Serbian": "sr",
    "Chinese (PRC)": "zh-CN",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Spanish": "es",
    "Swahili": "sw",
    "Swedish": "sv",
    "Tamil": "ta",
    "Telugu": "te",
    "Thai": "th",
    "Chinese (Taiwan)": "zh-TW",
    "Turkish": "tr",
    "Urdu": "ur",
    "Ukrainian": "uk",
    "Vietnamese": "vi",
    "Welsh": "cy"
};
export const languageList = Object.keys(LANGUAGE_TYPES);
//# sourceMappingURL=enums.js.map