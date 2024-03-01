---
mathLink-blocks:
    Tarski-Vaught-test: Tarski-Vaught Test
    embeddings-via-diagrams: $\mc{M}\into_\blob\mc{N}$ $\Leftrightarrow$ $\mc{N}\models\Diag_\blob\!\mc{M}$
    extension-of-partial-elementary: Extension of $A\eleminto\mc{N}$ to $\mc{M}\eleminto\mc{N}'\elemextend\mc{N}$
---

<div class="topSpace"></div>

Date Created: 21/12/2023 14:38:27
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Prime and Atomic Models]], [[Universal Model]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Lowenheim-Skolem Theorem]], [[Ehrenfeucht-Fraisse Games]], [[Homogeneous Model]]
Equivalences: [[Tarski-Vaught Test]]
Justifications: [[Compactness Theorem]]

``` ad-Definition
title: Definition (Elementarity).

Let $\mc{L}$ be a language in $\FOL$. We say that an $\mc{L}$-structure $\mc{M}$ <b>elementarily embeds</b> in $\mc{N}$, written $\mc{M}\eleminto\mc{N}$, if there is a homomorphism $h:\mc{M}\to\mc{N}$ such that for all $\mc{L}$-formulas $\phi(\vec{x})$ and $\vec{a}\in M$, we have $\mc{M}\models\phi(\vec{a})$ iff $\mc{N}\models\phi(h(\vec{a}))$.
* A substructure $\mc{M}\substructeq\mc{N}$ is said to be <b>elementary</b>, written $\mc{M}\elemembed\mc{N}$, if $\iota:\mc{M}\eleminto\mc{N}$. In this case, we also say that $\mc{N}$ is an <b>elementary extension</b> of $\mc{M}$.

```

<b>Remark.</b> In other words, $h:\mc{M}\eleminto\mc{N}$ if $h$ preserves all first-order formulas. A weaker notion is that of <i>elementary equivalence</i>, written $\mc{M}\elemequiv\mc{N}$, which only requires $\Th\mc{M}=\Th\mc{N}$. Note that $\mc{M}\iso\mc{N}$ implies, by induction on the construction of $\mc{L}$-sentences, that $\mc{M}\elemequiv\mc{N}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A useful method to determine when $\mc{M}\into\mc{N}$ or $\mc{M}\eleminto\mc{N}$ is the use of <i>diagrams</i>. For an $\mc{L}$-structure $\mc{M}$, let $\mc{L}_M\coloneqq\mc{L}\sqcup\l\{c_a\r\}_{a\in M}$.  The <i>elementary diagram</i> of $\mc{M}$ is the $\mc{L}_M$-theory $\Diag_\textrm{el}\mc{M}\coloneqq\Th_{\mc{L}_M}\!\mc{M}$ consisting of all $\mc{L}_M$-sentences $\phi$. The <i>atomic diagram</i> $\Diag\mc{M}$ is similar, except that we require $\phi$ to be quantifier-free.
&emsp;&emsp;If $\mc{N}$ is an $\mc{L}_M$-structure with $\mc{N}\models\Diag\mc{M}$, then $\mc{M}\into\mc{N}$. Indeed, the map $j:M\to N$ sending $a\in M$ to the interpretation of its corresponding $\mc{L}_M$-constant in $\mc{N}$ is an embedding. Moreover, if $\mc{N}\models\Diag_\textrm{el}\mc{M}$, then $j$ is elementary and hence $\mc{M}\elemembed\mc{N}'$ for some isomorphic copy $\mc{N}'$ of $\mc{N}$.<span style="float:right;">$\blacklozenge$</span> ^embeddings-via-diagrams

---

<b>Remark.</b> Fix $A\subseteq M$. To illustrate the above, we show that every <i>partial elementary map</i> $f:A\eleminto\mc{N}$ (i.e., a map such that $\mc{M}\models\phi(\vec{a})$ iff $\mc{N}\models\phi(f(\vec{a}))$ for all $\mc{L}$-formulas $\phi(\vec{x})$ and all $\vec{a}\in A$) extends to an elementary embedding $f:\mc{M}\eleminto\mc{N}'$ for some elementary extension $\mc{N}'\elemextend\mc{N}$, for which  it suffices (by induction) to show that for any $b\in M$, there is some elementary extension $\mc{N}^\ast\elemextend\mc{N}$ and a partial elementary map $f^\ast:A\cup\l\{b\r\}\eleminto\mc{N}^\ast$ extending $f$.
&emsp;&emsp;To this end, consider the $\mc{L}_{N,c}$-theory $T\coloneqq\Diag_\textrm{el}\mc{N}\cup\l\{\phi(c,f(a_1),\dots,f(a_n)))\st\mc{M}\models\phi(b,a_1,\dots,a_n),a_i\in A\r\}$ for some new constant symbol $c$, which we claim is satisfiable. To this end, let $\Diag_\textrm{el}\mc{N}\cup\Delta\subseteq T$ be finite. By taking conjunctions, we may assume that $\Delta=\l\{\phi(c,f(a_1),\dots,f(a_n))\r\}$. Since $\mc{M}\models\ex x\phi(x,a_1,\dots,a_n)$ and $f$ is partial elementary, we see that $\mc{N}\models\ex x\phi(x,f(a_1),\dots,f(a_n))$. Interpreting $c$ as any such witness and setting $f^\ast(b)\coloneqq c$ gives us the desired model $\mc{N}^\ast\models T$.<span style="float:right;">$\blacklozenge$</span> ^extension-of-partial-elementary
