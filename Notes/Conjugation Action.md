---
mathLink: auto
mathLink-blocks:
    inner-automorphism: $\Inn G$
    inner-automorphism-cyclic-abelian: $\Inn G$ cyclic $\Rightarrow$ $G$ abelian
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:25:27
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Basic properties of symmetric groups#^conjugation]], [[Endomorphisms in Category of Modules#^similarity-of-matrices]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Class Equation]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Regular Action#^equivariant-quotients-iff-conjugate-subgroups]]
Justifications: [[Isomorphism Theorems]]

``` ad-Definition
title: Definition.

Let $G$ be a group. The <b>conjugation action</b> on $G$ is the left $G$-action $\phi:G\to\Aut\l(G\r):g\mapsto\phi_g$ given by $\phi_g\!\l(x\r)\coloneqq gxg^{-1}$ for all $x,g\in G$.

```

<b>Remark.</b> For all $x\in G$, the orbit $Gx$ is called the <i>conjugacy class</i> of $x$ and any $y\in Gx$ is said to be <i>conjugate to $x$</i>. The <i>centralizer</i> $C_G\!\l(x\r)$ of $x$ in $G$ is the stabilizer $G_x$; that is, $C_G\!\l(x\r)\coloneqq\l\{g\in G\st gx=xg\r\}$, and the kernel $Z\l(G\r)\coloneqq\ker\phi=\bigcap_xG_x$ is the <i>center</i> of $G$, and consists of those $g\in G$ that commute with everything else.
* Generalizing, we let $G$ act on $\pow\l(G\r)$ by $\phi_g\!\l(S\r)\coloneqq gSg^{-1}$ for all $S\subseteq X$. The stabilizer subgroup of $S$ under $\phi$ is the <i>normalizer</i> $N_G\!\l(S\r)\coloneqq\l\{g\in G\st gS=Sg\r\}$, and the normal subgroups $N\nsubgrpeq G$ are exactly the subgroups with trivial orbit. Furthermore, letting $N_G\!\l(S\r)$ act on $S$ via conjugation by $\phi_g\!\l(x\r)\coloneqq gxg^{-1}\in S$ gives us the <i>centralizer</i> $C_G\!\l(S\r)\coloneqq\l\{g\in G\st(\fa s\in S)gs=sg\r\}$ as the kernel of $\phi$. Note that $\phi_g\!\l(x\r)\in S$ for all $g\in N_G\!\l(S\r)$ by definition of the normalizer.

Clearly $Z\l(G\r)\substructeq C_G\!\l(S\r)$ for all $S\subseteq G$, and for all subgroups $H\substructeq G$, we have $H\substructeq C_G\!\l(H\r)$ iff $H$ is abelian.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Since $Z\l(G\r)=\ker\phi\nsubgrpeq G$, the quotient $G/Z\l(G\r)$ is isomorphic to a subgroup of $\Aut\l(G\r)$ via $gZ\l(G\r)\mapsto\phi_g$. This subgroup is called the <i>inner automorphism group</i> of $G$, denoted $\Inn\l(G\r)$. Explicitly an automorphism $\phi\in\Aut\l(G\r)$ is inner iff there is some $g\in G$ such that $\phi=\phi_g$, in which case $\phi$ is <i>induced</i> by $g$. ^inner-automorphism
* It is clear that if $\Inn\l(G\r)$ is cyclic, then $G$ is abelian. Indeed, in this case there is some $x\in Z\l(G\r)$ such that, for all $g\in G$, we have $gZ\l(G\r)=\l(xZ\l(G\r)\r)^r$ for some $r\in\N$, so $g=x^rz$ for some $z\in Z\l(G\r)$. A computation shows that $g_1g_2=g_2g_1$ for all $g_1,g_2\in G$, as desired.<span style="float:right;">$\blacklozenge$</span> ^inner-automorphism-cyclic-abelian

---

<b>Remark.</b> We clearly have $H\nsubgrpeq N_G\!\l(H\r)$. If $H\nsubgrpeq K\substructeq G$, then $K\substructeq N_G\!\l(H\r)$, which shows that $N_G\!\l(H\r)$ is the largest subgroup of $G$ in which $H$ is normal in. Note that $N_G\!\l(H\r)$ is _not necessarily_ a normal subgroup of $G$. A counterexample is with $H\coloneqq\l\{e,\l(1\ 2\r)\r\}\substructeq S_3\eqqcolon G$, where
$$\begin{equation}
    \l(1\ 2\ 3\r)H=\l\{\l(1\ 3\r),\l(1\ 2\ 3\r)\r\}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ H\l(1\ 2\ 3\r)=\l\{\l(2\ 3\r),\l(1\ 2\ 3\r)\r\}.\exqedin
\end{equation}$$
