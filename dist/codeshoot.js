import O from "html2canvas";
import E from "prismjs";
function F(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function J(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var N = { exports: {} };
(function(n) {
  var f = { core: { meta: { path: "components/prism-core.js", option: "mandatory" }, core: "Core" }, themes: { meta: { path: "themes/{id}.css", link: "index.html?theme={id}", exclusive: !0 }, prism: { title: "Default", option: "default" }, "prism-dark": "Dark", "prism-funky": "Funky", "prism-okaidia": { title: "Okaidia", owner: "ocodia" }, "prism-twilight": { title: "Twilight", owner: "remybach" }, "prism-coy": { title: "Coy", owner: "tshedor" }, "prism-solarizedlight": { title: "Solarized Light", owner: "hectormatos2011 " }, "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" } }, languages: { meta: { path: "components/prism-{id}", noCSS: !0, examplesPath: "examples/prism-{id}", addCheckAll: !0 }, markup: { title: "Markup", alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"], aliasTitles: { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", ssml: "SSML", atom: "Atom", rss: "RSS" }, option: "default" }, css: { title: "CSS", option: "default", modify: "markup" }, clike: { title: "C-like", option: "default" }, javascript: { title: "JavaScript", require: "clike", modify: "markup", optional: "regex", alias: "js", option: "default" }, abap: { title: "ABAP", owner: "dellagustin" }, abnf: { title: "ABNF", owner: "RunDevelopment" }, actionscript: { title: "ActionScript", require: "javascript", modify: "markup", owner: "Golmote" }, ada: { title: "Ada", owner: "Lucretia" }, agda: { title: "Agda", owner: "xy-ren" }, al: { title: "AL", owner: "RunDevelopment" }, antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" }, apacheconf: { title: "Apache Configuration", owner: "GuiTeK" }, apex: { title: "Apex", require: ["clike", "sql"], owner: "RunDevelopment" }, apl: { title: "APL", owner: "ngn" }, applescript: { title: "AppleScript", owner: "Golmote" }, aql: { title: "AQL", owner: "RunDevelopment" }, arduino: { title: "Arduino", require: "cpp", alias: "ino", owner: "dkern" }, arff: { title: "ARFF", owner: "Golmote" }, armasm: { title: "ARM Assembly", alias: "arm-asm", owner: "RunDevelopment" }, arturo: { title: "Arturo", alias: "art", optional: ["bash", "css", "javascript", "markup", "markdown", "sql"], owner: "drkameleon" }, asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" }, aspnet: { title: "ASP.NET (C#)", require: ["markup", "csharp"], owner: "nauzilus" }, asm6502: { title: "6502 Assembly", owner: "kzurawel" }, asmatmel: { title: "Atmel AVR Assembly", owner: "cerkit" }, autohotkey: { title: "AutoHotkey", owner: "aviaryan" }, autoit: { title: "AutoIt", owner: "Golmote" }, avisynth: { title: "AviSynth", alias: "avs", owner: "Zinfidel" }, "avro-idl": { title: "Avro IDL", alias: "avdl", owner: "RunDevelopment" }, awk: { title: "AWK", alias: "gawk", aliasTitles: { gawk: "GAWK" }, owner: "RunDevelopment" }, bash: { title: "Bash", alias: ["sh", "shell"], aliasTitles: { sh: "Shell", shell: "Shell" }, owner: "zeitgeist87" }, basic: { title: "BASIC", owner: "Golmote" }, batch: { title: "Batch", owner: "Golmote" }, bbcode: { title: "BBcode", alias: "shortcode", aliasTitles: { shortcode: "Shortcode" }, owner: "RunDevelopment" }, bbj: { title: "BBj", owner: "hyyan" }, bicep: { title: "Bicep", owner: "johnnyreilly" }, birb: { title: "Birb", require: "clike", owner: "Calamity210" }, bison: { title: "Bison", require: "c", owner: "Golmote" }, bnf: { title: "BNF", alias: "rbnf", aliasTitles: { rbnf: "RBNF" }, owner: "RunDevelopment" }, bqn: { title: "BQN", owner: "yewscion" }, brainfuck: { title: "Brainfuck", owner: "Golmote" }, brightscript: { title: "BrightScript", owner: "RunDevelopment" }, bro: { title: "Bro", owner: "wayward710" }, bsl: { title: "BSL (1C:Enterprise)", alias: "oscript", aliasTitles: { oscript: "OneScript" }, owner: "Diversus23" }, c: { title: "C", require: "clike", owner: "zeitgeist87" }, csharp: { title: "C#", require: "clike", alias: ["cs", "dotnet"], owner: "mvalipour" }, cpp: { title: "C++", require: "c", owner: "zeitgeist87" }, cfscript: { title: "CFScript", require: "clike", alias: "cfc", owner: "mjclemente" }, chaiscript: { title: "ChaiScript", require: ["clike", "cpp"], owner: "RunDevelopment" }, cil: { title: "CIL", owner: "sbrl" }, cilkc: { title: "Cilk/C", require: "c", alias: "cilk-c", owner: "OpenCilk" }, cilkcpp: { title: "Cilk/C++", require: "cpp", alias: ["cilk-cpp", "cilk"], owner: "OpenCilk" }, clojure: { title: "Clojure", owner: "troglotit" }, cmake: { title: "CMake", owner: "mjrogozinski" }, cobol: { title: "COBOL", owner: "RunDevelopment" }, coffeescript: { title: "CoffeeScript", require: "javascript", alias: "coffee", owner: "R-osey" }, concurnas: { title: "Concurnas", alias: "conc", owner: "jasontatton" }, csp: { title: "Content-Security-Policy", owner: "ScottHelme" }, cooklang: { title: "Cooklang", owner: "ahue" }, coq: { title: "Coq", owner: "RunDevelopment" }, crystal: { title: "Crystal", require: "ruby", owner: "MakeNowJust" }, "css-extras": { title: "CSS Extras", require: "css", modify: "css", owner: "milesj" }, csv: { title: "CSV", owner: "RunDevelopment" }, cue: { title: "CUE", owner: "RunDevelopment" }, cypher: { title: "Cypher", owner: "RunDevelopment" }, d: { title: "D", require: "clike", owner: "Golmote" }, dart: { title: "Dart", require: "clike", owner: "Golmote" }, dataweave: { title: "DataWeave", owner: "machaval" }, dax: { title: "DAX", owner: "peterbud" }, dhall: { title: "Dhall", owner: "RunDevelopment" }, diff: { title: "Diff", owner: "uranusjr" }, django: { title: "Django/Jinja2", require: "markup-templating", alias: "jinja2", owner: "romanvm" }, "dns-zone-file": { title: "DNS zone file", owner: "RunDevelopment", alias: "dns-zone" }, docker: { title: "Docker", alias: "dockerfile", owner: "JustinBeckwith" }, dot: { title: "DOT (Graphviz)", alias: "gv", optional: "markup", owner: "RunDevelopment" }, ebnf: { title: "EBNF", owner: "RunDevelopment" }, editorconfig: { title: "EditorConfig", owner: "osipxd" }, eiffel: { title: "Eiffel", owner: "Conaclos" }, ejs: { title: "EJS", require: ["javascript", "markup-templating"], owner: "RunDevelopment", alias: "eta", aliasTitles: { eta: "Eta" } }, elixir: { title: "Elixir", owner: "Golmote" }, elm: { title: "Elm", owner: "zwilias" }, etlua: { title: "Embedded Lua templating", require: ["lua", "markup-templating"], owner: "RunDevelopment" }, erb: { title: "ERB", require: ["ruby", "markup-templating"], owner: "Golmote" }, erlang: { title: "Erlang", owner: "Golmote" }, "excel-formula": { title: "Excel Formula", alias: ["xlsx", "xls"], owner: "RunDevelopment" }, fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" }, factor: { title: "Factor", owner: "catb0t" }, false: { title: "False", owner: "edukisto" }, "firestore-security-rules": { title: "Firestore security rules", require: "clike", owner: "RunDevelopment" }, flow: { title: "Flow", require: "javascript", owner: "Golmote" }, fortran: { title: "Fortran", owner: "Golmote" }, ftl: { title: "FreeMarker Template Language", require: "markup-templating", owner: "RunDevelopment" }, gml: { title: "GameMaker Language", alias: "gamemakerlanguage", require: "clike", owner: "LiarOnce" }, gap: { title: "GAP (CAS)", owner: "RunDevelopment" }, gcode: { title: "G-code", owner: "RunDevelopment" }, gdscript: { title: "GDScript", owner: "RunDevelopment" }, gedcom: { title: "GEDCOM", owner: "Golmote" }, gettext: { title: "gettext", alias: "po", owner: "RunDevelopment" }, gherkin: { title: "Gherkin", owner: "hason" }, git: { title: "Git", owner: "lgiraudel" }, glsl: { title: "GLSL", require: "c", owner: "Golmote" }, gn: { title: "GN", alias: "gni", owner: "RunDevelopment" }, "linker-script": { title: "GNU Linker Script", alias: "ld", owner: "RunDevelopment" }, go: { title: "Go", require: "clike", owner: "arnehormann" }, "go-module": { title: "Go module", alias: "go-mod", owner: "RunDevelopment" }, gradle: { title: "Gradle", require: "clike", owner: "zeabdelkhalek-badido18" }, graphql: { title: "GraphQL", optional: "markdown", owner: "Golmote" }, groovy: { title: "Groovy", require: "clike", owner: "robfletcher" }, haml: { title: "Haml", require: "ruby", optional: ["css", "css-extras", "coffeescript", "erb", "javascript", "less", "markdown", "scss", "textile"], owner: "Golmote" }, handlebars: { title: "Handlebars", require: "markup-templating", alias: ["hbs", "mustache"], aliasTitles: { mustache: "Mustache" }, owner: "Golmote" }, haskell: { title: "Haskell", alias: "hs", owner: "bholst" }, haxe: { title: "Haxe", require: "clike", optional: "regex", owner: "Golmote" }, hcl: { title: "HCL", owner: "outsideris" }, hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" }, hoon: { title: "Hoon", owner: "matildepark" }, http: { title: "HTTP", optional: ["csp", "css", "hpkp", "hsts", "javascript", "json", "markup", "uri"], owner: "danielgtaylor" }, hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" }, hsts: { title: "HTTP Strict-Transport-Security", owner: "ScottHelme" }, ichigojam: { title: "IchigoJam", owner: "BlueCocoa" }, icon: { title: "Icon", owner: "Golmote" }, "icu-message-format": { title: "ICU Message Format", owner: "RunDevelopment" }, idris: { title: "Idris", alias: "idr", owner: "KeenS", require: "haskell" }, ignore: { title: ".ignore", owner: "osipxd", alias: ["gitignore", "hgignore", "npmignore"], aliasTitles: { gitignore: ".gitignore", hgignore: ".hgignore", npmignore: ".npmignore" } }, inform7: { title: "Inform 7", owner: "Golmote" }, ini: { title: "Ini", owner: "aviaryan" }, io: { title: "Io", owner: "AlesTsurko" }, j: { title: "J", owner: "Golmote" }, java: { title: "Java", require: "clike", owner: "sherblot" }, javadoc: { title: "JavaDoc", require: ["markup", "java", "javadoclike"], modify: "java", optional: "scala", owner: "RunDevelopment" }, javadoclike: { title: "JavaDoc-like", modify: ["java", "javascript", "php"], owner: "RunDevelopment" }, javastacktrace: { title: "Java stack trace", owner: "RunDevelopment" }, jexl: { title: "Jexl", owner: "czosel" }, jolie: { title: "Jolie", require: "clike", owner: "thesave" }, jq: { title: "JQ", owner: "RunDevelopment" }, jsdoc: { title: "JSDoc", require: ["javascript", "javadoclike", "typescript"], modify: "javascript", optional: ["actionscript", "coffeescript"], owner: "RunDevelopment" }, "js-extras": { title: "JS Extras", require: "javascript", modify: "javascript", optional: ["actionscript", "coffeescript", "flow", "n4js", "typescript"], owner: "RunDevelopment" }, json: { title: "JSON", alias: "webmanifest", aliasTitles: { webmanifest: "Web App Manifest" }, owner: "CupOfTea696" }, json5: { title: "JSON5", require: "json", owner: "RunDevelopment" }, jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" }, jsstacktrace: { title: "JS stack trace", owner: "sbrl" }, "js-templates": { title: "JS Templates", require: "javascript", modify: "javascript", optional: ["css", "css-extras", "graphql", "markdown", "markup", "sql"], owner: "RunDevelopment" }, julia: { title: "Julia", owner: "cdagnino" }, keepalived: { title: "Keepalived Configure", owner: "dev-itsheng" }, keyman: { title: "Keyman", owner: "mcdurdin" }, kotlin: { title: "Kotlin", alias: ["kt", "kts"], aliasTitles: { kts: "Kotlin Script" }, require: "clike", owner: "Golmote" }, kumir: { title: "KuMir (КуМир)", alias: "kum", owner: "edukisto" }, kusto: { title: "Kusto", owner: "RunDevelopment" }, latex: { title: "LaTeX", alias: ["tex", "context"], aliasTitles: { tex: "TeX", context: "ConTeXt" }, owner: "japborst" }, latte: { title: "Latte", require: ["clike", "markup-templating", "php"], owner: "nette" }, less: { title: "Less", require: "css", optional: "css-extras", owner: "Golmote" }, lilypond: { title: "LilyPond", require: "scheme", alias: "ly", owner: "RunDevelopment" }, liquid: { title: "Liquid", require: "markup-templating", owner: "cinhtau" }, lisp: { title: "Lisp", alias: ["emacs", "elisp", "emacs-lisp"], owner: "JuanCaicedo" }, livescript: { title: "LiveScript", owner: "Golmote" }, llvm: { title: "LLVM IR", owner: "porglezomp" }, log: { title: "Log file", optional: "javastacktrace", owner: "RunDevelopment" }, lolcode: { title: "LOLCODE", owner: "Golmote" }, lua: { title: "Lua", owner: "Golmote" }, magma: { title: "Magma (CAS)", owner: "RunDevelopment" }, makefile: { title: "Makefile", owner: "Golmote" }, markdown: { title: "Markdown", require: "markup", optional: "yaml", alias: "md", owner: "Golmote" }, "markup-templating": { title: "Markup templating", require: "markup", owner: "Golmote" }, mata: { title: "Mata", owner: "RunDevelopment" }, matlab: { title: "MATLAB", owner: "Golmote" }, maxscript: { title: "MAXScript", owner: "RunDevelopment" }, mel: { title: "MEL", owner: "Golmote" }, mermaid: { title: "Mermaid", owner: "RunDevelopment" }, metafont: { title: "METAFONT", owner: "LaeriExNihilo" }, mizar: { title: "Mizar", owner: "Golmote" }, mongodb: { title: "MongoDB", owner: "airs0urce", require: "javascript" }, monkey: { title: "Monkey", owner: "Golmote" }, moonscript: { title: "MoonScript", alias: "moon", owner: "RunDevelopment" }, n1ql: { title: "N1QL", owner: "TMWilds" }, n4js: { title: "N4JS", require: "javascript", optional: "jsdoc", alias: "n4jsd", owner: "bsmith-n4" }, "nand2tetris-hdl": { title: "Nand To Tetris HDL", owner: "stephanmax" }, naniscript: { title: "Naninovel Script", owner: "Elringus", alias: "nani" }, nasm: { title: "NASM", owner: "rbmj" }, neon: { title: "NEON", owner: "nette" }, nevod: { title: "Nevod", owner: "nezaboodka" }, nginx: { title: "nginx", owner: "volado" }, nim: { title: "Nim", owner: "Golmote" }, nix: { title: "Nix", owner: "Golmote" }, nsis: { title: "NSIS", owner: "idleberg" }, objectivec: { title: "Objective-C", require: "c", alias: "objc", owner: "uranusjr" }, ocaml: { title: "OCaml", owner: "Golmote" }, odin: { title: "Odin", owner: "edukisto" }, opencl: { title: "OpenCL", require: "c", modify: ["c", "cpp"], owner: "Milania1" }, openqasm: { title: "OpenQasm", alias: "qasm", owner: "RunDevelopment" }, oz: { title: "Oz", owner: "Golmote" }, parigp: { title: "PARI/GP", owner: "Golmote" }, parser: { title: "Parser", require: "markup", owner: "Golmote" }, pascal: { title: "Pascal", alias: "objectpascal", aliasTitles: { objectpascal: "Object Pascal" }, owner: "Golmote" }, pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" }, psl: { title: "PATROL Scripting Language", owner: "bertysentry" }, pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" }, peoplecode: { title: "PeopleCode", alias: "pcode", owner: "RunDevelopment" }, perl: { title: "Perl", owner: "Golmote" }, php: { title: "PHP", require: "markup-templating", owner: "milesj" }, phpdoc: { title: "PHPDoc", require: ["php", "javadoclike"], modify: "php", owner: "RunDevelopment" }, "php-extras": { title: "PHP Extras", require: "php", modify: "php", owner: "milesj" }, "plant-uml": { title: "PlantUML", alias: "plantuml", owner: "RunDevelopment" }, plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" }, powerquery: { title: "PowerQuery", alias: ["pq", "mscript"], owner: "peterbud" }, powershell: { title: "PowerShell", owner: "nauzilus" }, processing: { title: "Processing", require: "clike", owner: "Golmote" }, prolog: { title: "Prolog", owner: "Golmote" }, promql: { title: "PromQL", owner: "arendjr" }, properties: { title: ".properties", owner: "Golmote" }, protobuf: { title: "Protocol Buffers", require: "clike", owner: "just-boris" }, pug: { title: "Pug", require: ["markup", "javascript"], optional: ["coffeescript", "ejs", "handlebars", "less", "livescript", "markdown", "scss", "stylus", "twig"], owner: "Golmote" }, puppet: { title: "Puppet", owner: "Golmote" }, pure: { title: "Pure", optional: ["c", "cpp", "fortran"], owner: "Golmote" }, purebasic: { title: "PureBasic", require: "clike", alias: "pbfasm", owner: "HeX0R101" }, purescript: { title: "PureScript", require: "haskell", alias: "purs", owner: "sriharshachilakapati" }, python: { title: "Python", alias: "py", owner: "multipetros" }, qsharp: { title: "Q#", require: "clike", alias: "qs", owner: "fedonman" }, q: { title: "Q (kdb+ database)", owner: "Golmote" }, qml: { title: "QML", require: "javascript", owner: "RunDevelopment" }, qore: { title: "Qore", require: "clike", owner: "temnroegg" }, r: { title: "R", owner: "Golmote" }, racket: { title: "Racket", require: "scheme", alias: "rkt", owner: "RunDevelopment" }, cshtml: { title: "Razor C#", alias: "razor", require: ["markup", "csharp"], optional: ["css", "css-extras", "javascript", "js-extras"], owner: "RunDevelopment" }, jsx: { title: "React JSX", require: ["markup", "javascript"], optional: ["jsdoc", "js-extras", "js-templates"], owner: "vkbansal" }, tsx: { title: "React TSX", require: ["jsx", "typescript"] }, reason: { title: "Reason", require: "clike", owner: "Golmote" }, regex: { title: "Regex", owner: "RunDevelopment" }, rego: { title: "Rego", owner: "JordanSh" }, renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" }, rescript: { title: "ReScript", alias: "res", owner: "vmarcosp" }, rest: { title: "reST (reStructuredText)", owner: "Golmote" }, rip: { title: "Rip", owner: "ravinggenius" }, roboconf: { title: "Roboconf", owner: "Golmote" }, robotframework: { title: "Robot Framework", alias: "robot", owner: "RunDevelopment" }, ruby: { title: "Ruby", require: "clike", alias: "rb", owner: "samflores" }, rust: { title: "Rust", owner: "Golmote" }, sas: { title: "SAS", optional: ["groovy", "lua", "sql"], owner: "Golmote" }, sass: { title: "Sass (Sass)", require: "css", optional: "css-extras", owner: "Golmote" }, scss: { title: "Sass (SCSS)", require: "css", optional: "css-extras", owner: "MoOx" }, scala: { title: "Scala", require: "java", owner: "jozic" }, scheme: { title: "Scheme", owner: "bacchus123" }, "shell-session": { title: "Shell session", require: "bash", alias: ["sh-session", "shellsession"], owner: "RunDevelopment" }, smali: { title: "Smali", owner: "RunDevelopment" }, smalltalk: { title: "Smalltalk", owner: "Golmote" }, smarty: { title: "Smarty", require: "markup-templating", optional: "php", owner: "Golmote" }, sml: { title: "SML", alias: "smlnj", aliasTitles: { smlnj: "SML/NJ" }, owner: "RunDevelopment" }, solidity: { title: "Solidity (Ethereum)", alias: "sol", require: "clike", owner: "glachaud" }, "solution-file": { title: "Solution file", alias: "sln", owner: "RunDevelopment" }, soy: { title: "Soy (Closure Template)", require: "markup-templating", owner: "Golmote" }, sparql: { title: "SPARQL", require: "turtle", owner: "Triply-Dev", alias: "rq" }, "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" }, sqf: { title: "SQF: Status Quo Function (Arma 3)", require: "clike", owner: "RunDevelopment" }, sql: { title: "SQL", owner: "multipetros" }, squirrel: { title: "Squirrel", require: "clike", owner: "RunDevelopment" }, stan: { title: "Stan", owner: "RunDevelopment" }, stata: { title: "Stata Ado", require: ["mata", "java", "python"], owner: "RunDevelopment" }, iecst: { title: "Structured Text (IEC 61131-3)", owner: "serhioromano" }, stylus: { title: "Stylus", owner: "vkbansal" }, supercollider: { title: "SuperCollider", alias: "sclang", owner: "RunDevelopment" }, swift: { title: "Swift", owner: "chrischares" }, systemd: { title: "Systemd configuration file", owner: "RunDevelopment" }, "t4-templating": { title: "T4 templating", owner: "RunDevelopment" }, "t4-cs": { title: "T4 Text Templates (C#)", require: ["t4-templating", "csharp"], alias: "t4", owner: "RunDevelopment" }, "t4-vb": { title: "T4 Text Templates (VB)", require: ["t4-templating", "vbnet"], owner: "RunDevelopment" }, tap: { title: "TAP", owner: "isaacs", require: "yaml" }, tcl: { title: "Tcl", owner: "PeterChaplin" }, tt2: { title: "Template Toolkit 2", require: ["clike", "markup-templating"], owner: "gflohr" }, textile: { title: "Textile", require: "markup", optional: "css", owner: "Golmote" }, toml: { title: "TOML", owner: "RunDevelopment" }, tremor: { title: "Tremor", alias: ["trickle", "troy"], owner: "darach", aliasTitles: { trickle: "trickle", troy: "troy" } }, turtle: { title: "Turtle", alias: "trig", aliasTitles: { trig: "TriG" }, owner: "jakubklimek" }, twig: { title: "Twig", require: "markup-templating", owner: "brandonkelly" }, typescript: { title: "TypeScript", require: "javascript", optional: "js-templates", alias: "ts", owner: "vkbansal" }, typoscript: { title: "TypoScript", alias: "tsconfig", aliasTitles: { tsconfig: "TSConfig" }, owner: "dkern" }, unrealscript: { title: "UnrealScript", alias: ["uscript", "uc"], owner: "RunDevelopment" }, uorazor: { title: "UO Razor Script", owner: "jaseowns" }, uri: { title: "URI", alias: "url", aliasTitles: { url: "URL" }, owner: "RunDevelopment" }, v: { title: "V", require: "clike", owner: "taggon" }, vala: { title: "Vala", require: "clike", optional: "regex", owner: "TemplarVolk" }, vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" }, velocity: { title: "Velocity", require: "markup", owner: "Golmote" }, verilog: { title: "Verilog", owner: "a-rey" }, vhdl: { title: "VHDL", owner: "a-rey" }, vim: { title: "vim", owner: "westonganger" }, "visual-basic": { title: "Visual Basic", alias: ["vb", "vba"], aliasTitles: { vba: "VBA" }, owner: "Golmote" }, warpscript: { title: "WarpScript", owner: "RunDevelopment" }, wasm: { title: "WebAssembly", owner: "Golmote" }, "web-idl": { title: "Web IDL", alias: "webidl", owner: "RunDevelopment" }, wgsl: { title: "WGSL", owner: "Dr4gonthree" }, wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" }, wolfram: { title: "Wolfram language", alias: ["mathematica", "nb", "wl"], aliasTitles: { mathematica: "Mathematica", nb: "Mathematica Notebook" }, owner: "msollami" }, wren: { title: "Wren", owner: "clsource" }, xeora: { title: "Xeora", require: "markup", alias: "xeoracube", aliasTitles: { xeoracube: "XeoraCube" }, owner: "freakmaxi" }, "xml-doc": { title: "XML doc (.net)", require: "markup", modify: ["csharp", "fsharp", "vbnet"], owner: "RunDevelopment" }, xojo: { title: "Xojo (REALbasic)", owner: "Golmote" }, xquery: { title: "XQuery", require: "markup", owner: "Golmote" }, yaml: { title: "YAML", alias: "yml", owner: "hason" }, yang: { title: "YANG", owner: "RunDevelopment" }, zig: { title: "Zig", owner: "RunDevelopment" } }, plugins: { meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" }, "line-highlight": { title: "Line Highlight", description: "Highlights specific lines and/or line ranges." }, "line-numbers": { title: "Line Numbers", description: "Line number at the beginning of code lines.", owner: "kuba-kubula" }, "show-invisibles": { title: "Show Invisibles", description: "Show hidden characters such as tabs and line breaks.", optional: ["autolinker", "data-uri-highlight"] }, autolinker: { title: "Autolinker", description: "Converts URLs and emails in code to clickable links. Parses Markdown links in comments." }, wpd: { title: "WebPlatform Docs", description: 'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.' }, "custom-class": { title: "Custom Class", description: "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.", owner: "dvkndn", noCSS: !0 }, "file-highlight": { title: "File Highlight", description: "Fetch external files and highlight them with Prism. Used on the Prism website itself.", noCSS: !0 }, "show-language": { title: "Show Language", description: "Display the highlighted language in code blocks (inline code does not show the label).", owner: "nauzilus", noCSS: !0, require: "toolbar" }, "jsonp-highlight": { title: "JSONP Highlight", description: "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).", noCSS: !0, owner: "nauzilus" }, "highlight-keywords": { title: "Highlight Keywords", description: "Adds special CSS classes for each keyword for fine-grained highlighting.", owner: "vkbansal", noCSS: !0 }, "remove-initial-line-feed": { title: "Remove initial line feed", description: "Removes the initial line feed in code blocks.", owner: "Golmote", noCSS: !0 }, "inline-color": { title: "Inline color", description: "Adds a small inline preview for colors in style sheets.", require: "css-extras", owner: "RunDevelopment" }, previewers: { title: "Previewers", description: "Previewers for angles, colors, gradients, easing and time.", require: "css-extras", owner: "Golmote" }, autoloader: { title: "Autoloader", description: "Automatically loads the needed languages to highlight the code blocks.", owner: "Golmote", noCSS: !0 }, "keep-markup": { title: "Keep Markup", description: "Prevents custom markup from being dropped out during highlighting.", owner: "Golmote", optional: "normalize-whitespace", noCSS: !0 }, "command-line": { title: "Command Line", description: "Display a command line with a prompt and, optionally, the output/response from the commands.", owner: "chriswells0" }, "unescaped-markup": { title: "Unescaped Markup", description: "Write markup without having to escape anything." }, "normalize-whitespace": { title: "Normalize Whitespace", description: "Supports multiple operations to normalize whitespace in code blocks.", owner: "zeitgeist87", optional: "unescaped-markup", noCSS: !0 }, "data-uri-highlight": { title: "Data-URI Highlight", description: "Highlights data-URI contents.", owner: "Golmote", noCSS: !0 }, toolbar: { title: "Toolbar", description: "Attach a toolbar for plugins to easily register buttons on the top of a code block.", owner: "mAAdhaTTah" }, "copy-to-clipboard": { title: "Copy to Clipboard Button", description: "Add a button that copies the code block to the clipboard when clicked.", owner: "mAAdhaTTah", require: "toolbar", noCSS: !0 }, "download-button": { title: "Download Button", description: "A button in the toolbar of a code block adding a convenient way to download a code file.", owner: "Golmote", require: "toolbar", noCSS: !0 }, "match-braces": { title: "Match braces", description: "Highlights matching braces.", owner: "RunDevelopment" }, "diff-highlight": { title: "Diff Highlight", description: "Highlights the code inside diff blocks.", owner: "RunDevelopment", require: "diff" }, "filter-highlight-all": { title: "Filter highlightAll", description: "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.", owner: "RunDevelopment", noCSS: !0 }, treeview: { title: "Treeview", description: "A language with special styles to highlight file system tree structures.", owner: "Golmote" } } };
  n.exports && (n.exports = f);
})(N);
var I = N.exports, z = { exports: {} };
(function(n) {
  var f = /* @__PURE__ */ function() {
    var k = function() {
    };
    function y(o, t) {
      Array.isArray(o) ? o.forEach(t) : o != null && t(o, 0);
    }
    function d(o) {
      for (var t = {}, a = 0, r = o.length; a < r; a++)
        t[o[a]] = !0;
      return t;
    }
    function D(o) {
      var t = {};
      for (var a in o) {
        var r = o[a];
        for (var l in r)
          if (l != "meta") {
            var e = r[l];
            t[l] = typeof e == "string" ? { title: e } : e;
          }
      }
      return t;
    }
    function j(o) {
      var t = {}, a = [];
      function r(l, e) {
        if (!(l in t)) {
          e.push(l);
          var s = e.indexOf(l);
          if (s < e.length - 1)
            throw new Error("Circular dependency: " + e.slice(s).join(" -> "));
          var m = {}, u = o[l];
          if (u) {
            let w = function(i) {
              if (!(i in o))
                throw new Error(l + " depends on an unknown component " + i);
              if (!(i in m)) {
                r(i, e), m[i] = !0;
                for (var g in t[i])
                  m[g] = !0;
              }
            };
            y(u.require, w), y(u.optional, w), y(u.modify, w);
          }
          t[l] = m, e.pop();
        }
      }
      return function(l) {
        var e = t[l];
        return e || (r(l, a), e = t[l]), e;
      };
    }
    function x(o) {
      var t;
      return function(a) {
        if (a in o)
          return a;
        if (!t) {
          t = {};
          for (var r in o) {
            var l = o[r];
            y(l && l.alias, function(e) {
              if (e in t)
                throw new Error(e + " cannot be alias for both " + r + " and " + t[e]);
              if (e in o)
                throw new Error(e + " cannot be alias of " + r + " because it is a component.");
              t[e] = r;
            });
          }
        }
        return t[a] || a;
      };
    }
    function G(o, t, a, r) {
      var l = r ? r.series : void 0, e = r ? r.parallel : k, s = {}, m = {};
      function u(v) {
        if (v in s)
          return s[v];
        m[v] = !0;
        var c = [];
        for (var q in o(v))
          q in t && c.push(q);
        var S;
        if (c.length === 0)
          S = a(v);
        else {
          var b = e(c.map(function(p) {
            var h = u(p);
            return delete m[p], h;
          }));
          l ? S = l(b, function() {
            return a(v);
          }) : a(v);
        }
        return s[v] = S;
      }
      for (var w in t)
        u(w);
      var i = [];
      for (var g in m)
        i.push(s[g]);
      return e(i);
    }
    function C(o) {
      for (var t in o)
        return !0;
      return !1;
    }
    function T(o, t, a) {
      var r = D(o), l = x(r);
      t = t.map(l), a = (a || []).map(l);
      var e = d(t), s = d(a);
      t.forEach(m);
      function m(p) {
        var h = r[p];
        y(h && h.require, function(R) {
          R in s || (e[R] = !0, m(R));
        });
      }
      for (var u = j(r), w = e, i; C(w); ) {
        i = {};
        for (var g in w) {
          var v = r[g];
          y(v && v.modify, function(p) {
            p in s && (i[p] = !0);
          });
        }
        for (var c in s)
          if (!(c in e)) {
            for (var q in u(c))
              if (q in e) {
                i[c] = !0;
                break;
              }
          }
        w = i;
        for (var S in w)
          e[S] = !0;
      }
      var b = {
        getIds: function() {
          var p = [];
          return b.load(function(h) {
            p.push(h);
          }), p;
        },
        load: function(p, h) {
          return G(u, e, p, h);
        }
      };
      return b;
    }
    return T;
  }();
  n.exports = f;
})(z);
var Q = z.exports;
const L = I, W = Q, M = /* @__PURE__ */ new Set();
function A(n) {
  n === void 0 ? n = Object.keys(L.languages).filter((k) => k != "meta") : Array.isArray(n) || (n = [n]);
  const f = [...M, ...Object.keys(Prism.languages)];
  W(L, n, f).load((k) => {
    if (!(k in L.languages)) {
      A.silent || console.warn("Language does not exist: " + k);
      return;
    }
    const y = "./prism-" + k;
    delete require.cache[require.resolve(y)], delete Prism.languages[k], J(y), M.add(k);
  });
}
A.silent = !1;
var V = A;
const U = /* @__PURE__ */ F(V), B = {
  default: "prism",
  tomorrow: "prism-tomorrow",
  dark: "prism-dark",
  funky: "prism-funky",
  okaidia: "prism-okaidia",
  solarized: "prism-solarizedlight",
  twilight: "prism-twilight",
  coy: "prism-coy"
};
function $({
  code: n,
  language: f = "javascript",
  title: k = "devsip",
  theme: y,
  container: d,
  enableDownload: D = !0,
  enableFocus: j = !0,
  enableInput: x = !0,
  enablePaste: G = !0,
  enableCopy: C = !0,
  fontFamily: T = "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Courier New', monospace",
  fontSize: o = "14px"
}) {
  if (!d) throw new Error("You must provide a container element.");
  d.style.setProperty("--font-mono", T), d.style.setProperty("--font-size", o);
  const t = B[y] || B.default;
  if (!E.languages[f])
    try {
      U([f]);
    } catch (i) {
      console.warn(`Language '${f}' could not be loaded`, i);
    }
  const a = "// Paste your code here to enjoy CodeShoot", r = "​", l = !(n != null && n.trim()), e = k.replace(/"/g, "&quot;").replace(/</g, "&lt;");
  d.innerHTML = `
    <div class="codephoto ${t}">
      <div class="editor-wrapper" id="screenshotArea">
        <input type="text" id="titleInput" value="${e}" />
        <pre class="highlighted-code"><code id="highlightedCode" class="language-${f}"></code></pre>
        <textarea id="codeInput" spellcheck="false">${l ? a : n}</textarea>
      </div>
      <div style="margin-top: 1rem;">
        ${D ? '<button id="downloadBtn">Download Code Screenshot</button>' : ""}
        ${C ? '<button id="copyBtn">Copy Code</button>' : ""}
      </div>
    </div>
  `;
  const s = d.querySelector("#codeInput"), m = d.querySelector("#highlightedCode"), u = d.querySelector("#screenshotArea");
  u.classList.add("editing"), u.addEventListener("dblclick", () => {
    u.classList.toggle("editing"), u.classList.toggle("selecting");
  });
  function w() {
    let i = s.value;
    i === r && (i = ""), m.textContent = i || a, m.className = `language-${f}`, E.highlightElement(m), requestAnimationFrame(() => {
      s.style.width = u.clientWidth + "px", s.style.height = u.scrollHeight + "px";
    });
  }
  if (j && s.addEventListener("focus", () => {
    s.value.trim() === a && (s.value = r, w(), setTimeout(() => {
      s.setSelectionRange(1, 1);
    }, 0));
  }), G && s.addEventListener("paste", () => {
    requestAnimationFrame(w);
  }), x && s.addEventListener("input", w), document.fonts.ready.then(() => {
    w();
  }), D) {
    const i = d.querySelector("#downloadBtn");
    i == null || i.addEventListener("click", async () => {
      const g = d.querySelector("#screenshotArea"), v = d.querySelector(".highlighted-code");
      if (!g || !v) return;
      const c = g.cloneNode(!0), q = g.querySelectorAll("*"), S = c.querySelectorAll("*");
      q.forEach((p, h) => {
        const R = window.getComputedStyle(p), H = S[h];
        for (let P of R)
          H.style[P] = R.getPropertyValue(P);
      }), c.style.position = "absolute", c.style.left = "-9999px", c.style.top = "0", c.style.zIndex = "-1", c.style.width = "auto", c.style.height = "auto", c.style.overflow = "visible";
      const b = c.querySelector(".highlighted-code");
      b.style.width = "auto", b.style.height = "auto", b.style.overflow = "visible", b.style.maxHeight = "none", b.style.whiteSpace = "pre-wrap", b.style.wordBreak = "break-word", c.querySelectorAll("#downloadBtn, #copyBtn").forEach((p) => p.style.display = "none"), document.body.appendChild(c), await document.fonts.ready, requestAnimationFrame(() => {
        O(c, {
          scale: 2,
          backgroundColor: null,
          useCORS: !0,
          allowTaint: !1
        }).then((p) => {
          document.body.removeChild(c);
          const h = document.createElement("a");
          h.download = "codeshoot.png", h.href = p.toDataURL("image/png"), h.click();
        });
      });
    });
  }
  if (C) {
    const i = d.querySelector("#copyBtn");
    i == null || i.addEventListener("click", () => {
      navigator.clipboard.writeText(m.textContent).then(() => {
        const g = i.textContent;
        i.textContent = "Copied!", setTimeout(() => {
          i.textContent = g;
        }, 2e3);
      }).catch((g) => console.error("Copy failed", g));
    });
  }
}
export {
  $ as createCodeShot,
  B as themeMap
};
