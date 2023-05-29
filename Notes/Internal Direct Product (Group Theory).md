<div class="topSpace"></div>

Date Created: 27/10/2022 17:08:14
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $H_1,\dots,H_n$ be subgroups of a group $G$. Then $G$ is said to be an **(internal) direct product of $H_1,\dots,H_n$** if
* (Generating): $G=H_1\cdots H_n\coloneqq\l\{H_1\cdots H_n\in G\mid h_i\in H_i\r\}$.
* (Trivial intersection): $H_j\cap\l(H_1\cdots H_n\r)=\l\{e\r\}$ for all $j$.
* (Normality): $H_i\nsubgrpeq G$ for all $i$.

```

<b>Remark.</b> The internal direct product $G=N_1N_2$ is isomorphic to the external direct product $N_1\times N_2$ via $\phi:N_1\times N_2\to G$ mapping $\tpl{n_1,n_2}\mapsto n_1n_2$. Indeed, it is a homomorphism since $N_1,N_2\nsubgrpeq G$, and is also surjective since $G=N_1N_2$. For injectivity, take $\tpl{n_1,n_2}\in\ker\phi$, so $n_1=n_2^{-1}$. But then $n_1\in N_1\cap N_2=\l\{e\r\}$, which forces $n_1=n_2=e$ and so $\phi$ is an isomorphism.

This isomorphism generalizes to all finite products by induction, but does <i>not</i> generalize to infinite products.<span style="float:right;">$\blacklozenge$</span>
