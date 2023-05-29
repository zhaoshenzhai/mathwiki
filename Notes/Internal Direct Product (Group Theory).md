<div class="topSpace"></div>

Date Created: 27/10/2022 17:08:14
Tags: #Type/Definition #Topic/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $H_1,\dots,H_n$ be subgroups of a group $G$. Then $G$ is said to be an **(internal) direct product of $H_1,\dots,H_n$** if
* (Generating): $G=H_1\cdots H_n\coloneqq\l\{H_1\cdots H_n\in G\mid h_i\in H_i\r\}$.
* (Trivial intersection): $H_j\cap\l(H_1\cdots H_n\r)=\l\{e\r\}$ for all $j$.
* (Normality): $H_i\nsubgrpeq G$ for all $i$.

```

**Remark.** The internal direct product $G=N_1N_2$ is isomorphic to the external direct product $N_1\times N_2$ via $\phi:N_1\times N_2\to G$ mapping $\tpl{n_1,n_2}\mapsto n_1n_2$. Indeed, it is a homomorphism since $N_1,N_2\nsubgrpeq G$, and is also surjective since $G=N_1N_2$. For injectivity, take $\tpl{n_1,n_2}\in\ker\phi$, so $n_1=n_2^{-1}$. But then $n_1\in N_1\cap N_2=\l\{e\r\}$, which forces $n_1=n_2=e$ and so $\phi$ is an isomorphism.

This isomorphism generalizes to all finite products by induction, but does <i>not</i> generalize to infinite products.<span style="float:right;">$\blacklozenge$</span>
