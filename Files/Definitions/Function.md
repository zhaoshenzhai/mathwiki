<br />
<br />

Date created: 14/01/2022 14:25:20
Categories: #Set_Theory

Types: [[Injection]], [[Surjection]], [[Bijection]]
Examples: [[Identity (Function)]], [[Inclusion (Function)]]
Constructions: [[Image (Function)]], [[Preimage (Function)]], [[Restriction (Function)]], [[Composition (Function)]], [[Cartesian Product (Arbitrary)]], [[Multiset]]
Generalizations: [[Morphism]], [[Partial Function]]

!!! ad-Definition Definition.

Let $X$ and $Y$ be sets. A __function__ $f$ is a 3-tuple $\l(\Gamma_{\mathclap{f}}\;,X,Y\r)$ consisting of
* a binary relation $\Gamma_{\mathclap{f}}\;\subseteq X\times Y$ called the __graph of $f$__, satisfying
    * (Left-total): $\fa x\in X,\ex y\in Y:(x,y)\in\Gamma_{\mathclap{f}}\;$.
    * (Right-unique): $\fa x\in X,\fa y,z\in Y:\big((x,y)\in\Gamma_{\mathclap{f}}\;\mathrm{\ and\ }(x,z)\in\Gamma_{\mathclap{f}}\;\big)\Rightarrow y=z$,
* a set $\dom f\coloneqq X$ called the __domain of $f$__, and
* a set $\cdm f\coloneqq Y$ called the __codomain of $f$__.

--- admonition

**Remark.**
* The axioms that $\Gamma\!_f$ satisfies can be condensed into $\fa x\in X,\ex!y\in Y:\l(x,y\r)\in\Gamma\!_f$.
* Write $f:X\to Y$ or $X\overset{f}{\to}Y$ to indicate the domain and codomain of $f$, and write $x\mapsto y$ of $y=f\l(x\r)$ if $\l(x,y\r)\in\Gamma\!_f$.<span style="float:right;">$\blacklozenge$</span>
