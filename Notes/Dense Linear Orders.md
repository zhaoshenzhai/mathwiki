---
mathLink: $\DLO$
mathLink-blocks:
    without-endpoints: $\DLO_0$
---

<div class="topSpace"></div>

Date Created: 17/01/2024 19:12:23
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Example #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: [[Real Numbers]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Categorical Theory#^los-vaught-test]], [[Ehrenfeucht-Fraisse Games]]

``` ad-Example
title: Example (Dense Linear Orders).

Consider the language $\mc{L}\coloneqq\tpl{<}$ with one binary relation symbol. The theory of <b>dense linear orders without endpoints</b> is the theory $\DLO_0$ axiomatized by
* $\fa x(x\not<x)$ <span style="color:gray">(irreflexivity)</span>, $\fa x\fa y\fa z((x<y\land y<z)\rightarrow x\leq z)$ <span style="color:gray">(transitivity)</span>, and $\fa x\fa y(x=y\lor x<y\lor y<x)$ <span style="color:gray">(linearity)</span>;
* $\fa x\fa z(x<z\rightarrow\ex y(x<y<z))$ <span style="color:gray">(density)</span> and $\fa x\ex y_1\ex y_2(y_1<x<y_2)$ <span style="color:gray">(without-endpoints)</span>.

```
^without-endpoints

<b>Remark.</b> The theory $\DLO_0$ is $\aleph_0$-categorical, hence complete by the Łoś-Vaught Test. Indeed, let $\mc{A},\mc{B}\models\DLO_0$ be two countable models. To show that $\mc{A}\iso\mc{B}$, it suffices to show that $\textrm{Prover}$ has a winning strategy in the Ehrenfeucht-Fraïssé Game $G_\omega\!\l(\mc{A},\mc{B}\r)$.
* By induction, assume that $f_n:\mc{A}_n\to\mc{B}_n$ is a partial isomorphism and take $a\in\mc{A}$. If $a\in\mc{A}_n$, then nothing changes. Otherwise, either $a$ is an extremum of $\mc{A}_n$, or there are $\alpha,\beta\in\mc{A}_n$ with $\alpha<a<\beta$ such that for all $\gamma\in A_n$, either $\gamma\leq\alpha$ or $\gamma\geq\beta$. In the former case, we can choose $b\in\mc{B}$ to be the corresponding extremum in $\mc{B}$. Otherwise, since $f_n$ is a partial isomorphism, we have $f_n\!\l(\alpha\r)<f_n\!\l(\beta\r)$ and hence there is some $b\in\mc{B}\comp\mc{B}_n$ such that $f_n\!\l(\alpha\r)<b<f_n\!\l(\beta\r)$ by density of $\mc{B}$. Thus we have $\gamma<a$ iff $f_n\!\l(\gamma\r)<b$ for all $\gamma\in A_n$, so we let $\textrm{Prover}$ play $b$ to extend $f_n$ to the partial isomorphism $f_{n+1}:\mc{A}_n\sqcup\l\{a\r\}\to\mc{B}_n\sqcup\l\{b\r\}$.<span style="float:right;">$\blacklozenge$</span>
