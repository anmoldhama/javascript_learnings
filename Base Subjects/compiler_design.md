🔰 Basic Concepts
Q) What is a compiler? How does it differ from an interpreter?

Q) What are the phases of a compiler?

Q) What is lexical analysis?

Q) What is a token in lexical analysis?

Q) What is a lexeme?

Q) What is a pattern in compiler design?

Q) What are the different types of errors a compiler detects?

Q) What is syntax analysis or parsing?

Q) What is semantic analysis?

Q) What is intermediate code generation?

Q) What is code optimization?

Q) What is code generation?

Q) What is the role of the symbol table in a compiler?

Q) What is the difference between static and dynamic semantics?

Q) What is the difference between compilation and interpretation?

Q) What are the different types of compilers?

Q) What is a cross-compiler?

Q) What is a bootstrapping compiler?

Q) What is the difference between a compiler and an assembler?

Q) What is a parser generator?

🔍 Lexical Analysis
Q) What is a lexical analyzer?

Q) How does lexical analysis work?

Q) What are regular expressions? How are they used in lexical analysis?

Q) What is a finite automaton? Difference between DFA and NFA?

Q) How is a DFA constructed from a regular expression?

Q) What is the role of lexical analysis in error handling?

Q) What are the common tokens recognized by a lexical analyzer?

Q) How does a lexical analyzer handle whitespaces and comments?

Q) What is lexical ambiguity? How is it resolved?

Q) What is the difference between greedy and non-greedy matching?

Q) What is the role of symbol tables during lexical analysis?

Q) What are lexical errors? Examples.

Q) How does lexical analysis interact with syntax analysis?

Q) What tools are used for lexical analysis? (e.g., Lex, Flex)

Q) What is the difference between lexical and syntax errors?

Q) What is the importance of lookahead in lexical analysis?

🏗️ Syntax Analysis (Parsing)
Q) What is parsing?

Q) What are context-free grammars (CFG)?

Q) What is a parse tree?

Q) What is an abstract syntax tree (AST)?

Q) What is the difference between parse tree and AST?

Q) What are the types of parsers?

Q) What is top-down parsing? Examples.

Q) What is bottom-up parsing? Examples.

Q) What is recursive descent parsing?

Q) What is predictive parsing?

Q) What is LL parsing? Difference between LL(1) and LL(k).

Q) What is LR parsing? Explain LR(0), SLR(1), LALR(1), and CLR(1).

Q) What is shift-reduce parsing?

Q) What is reduce-reduce conflict?

Q) What is shift-reduce conflict?

Q) What is left recursion? How to eliminate it?

Q) What is left factoring?

Q) What is FIRST and FOLLOW sets?

Q) How do you construct FIRST and FOLLOW sets?

Q) What is ambiguity in grammar?

Q) What is a dangling else problem?

Q) How to resolve ambiguity in grammar?

Q) What are parsing tables?

Q) What is the significance of lookahead tokens?

Q) How is error recovery handled during parsing?

Q) What is the difference between syntax-directed translation and parsing?

Q) What is a syntax-directed definition (SDD)?

Q) What are semantic actions in parsing?

🧠 Semantic Analysis
Q) What is semantic analysis?

Q) What is a symbol table? How is it implemented?

Q) What are attributes in semantic analysis?

Q) What is attribute grammar?

Q) What is type checking? Static vs dynamic.

Q) How does a compiler handle type conversion?

Q) What is type inference?

Q) What is scope? Types of scopes.

Q) What is a block? What is lexical scoping?

Q) What are semantic errors? Examples.

Q) How are undefined variables detected?

Q) What is the role of symbol tables in semantic analysis?

Q) What is overloading resolution?

Q) How are function/procedure calls checked semantically?

Q) What is closure in programming languages?

Q) What is name mangling?

🖥️ Intermediate Code Generation
Q) What is intermediate code (IR)?

Q) Why is intermediate code important?

Q) What are the types of intermediate representations?

Q) Explain three-address code.

Q) What is quadruple, triple, indirect triple representations?

Q) How is intermediate code generated from an AST?

Q) How is control flow represented in intermediate code?

Q) How are boolean expressions represented?

Q) How is array indexing handled in intermediate code?

Q) What are basic blocks?

Q) What is a control flow graph (CFG)?

Q) What is data flow analysis?

Q) What is the difference between static single assignment (SSA) form and regular IR?

Q) What are the advantages of SSA form?

Q) What is code linearization?

⚙️ Code Optimization
Q) What is code optimization?

Q) What are local vs global optimizations?

Q) What are loop optimizations?

Q) What is dead code elimination?

Q) What is common subexpression elimination?

Q) What is constant propagation and folding?

Q) What is strength reduction?

Q) What is peephole optimization?

Q) What is instruction scheduling?

Q) What is register allocation?

Q) What are data flow equations?

Q) What is loop invariant code motion?

Q) What is alias analysis?

Q) How is control flow optimization done?

Q) What is interprocedural optimization?

Q) What are the trade-offs of optimization?

Q) How is optimization affected by target architecture?

🖥️ Code Generation
Q) What is code generation?

Q) What are the targets of code generation?

Q) What is instruction selection?

Q) What is instruction scheduling?

Q) What is register allocation?

Q) What is spilling in register allocation?

Q) What is machine code?

Q) What is the difference between assembly code and machine code?

Q) How does a compiler generate code for expressions?

Q) How are function calls handled in code generation?

Q) What is prologue and epilogue in generated code?

Q) What is calling convention?

Q) How is parameter passing implemented?

Q) How are arrays and pointers handled in code generation?

Q) How is memory management done during code generation?

Q) What are stack frames?

Q) What is tail call optimization?

Q) How does code generation differ for interpreted languages?

🧩 Error Handling
Q) What types of errors can a compiler detect?

Q) What are lexical, syntax, and semantic errors?

Q) How are lexical errors handled?

Q) What is panic mode error recovery?

Q) What is phrase level recovery?

Q) What is error productions?

Q) How does error recovery affect parsing performance?

Q) How are semantic errors reported?

Q) What is the role of error messages in compilers?

Q) How does the compiler continue after detecting an error?

🛠️ Tools & Miscellaneous
Q) What is Lex and Yacc?

Q) What is ANTLR?

Q) What is the role of compiler compiler tools?

Q) What is the difference between compiler and interpreter?

Q) What is JIT compilation?

Q) What is dynamic compilation?

Q) What is garbage collection? How is it related to compilers?

Q) What is link-time optimization?

Q) What are the differences between static and dynamic linking?

Q) How do modern compilers optimize for multi-core processors?