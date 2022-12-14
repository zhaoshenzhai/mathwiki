<div class="topSpace"></div>

Date Created: 27/10/2022 13:23:33
Tags: #Proposition #Courses/MATH235

Proved by: [[Order divides power iff power gives identity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ and $H$ be groups and fix $g\in G$ and $h\in H$ be of finite order. Then $\ord{\tpl{g,h}}=\lcm\l(\ord{g},\ord{h}\r)$._

```

_Proof_. Let $l\coloneqq\lcm\l(\ord{g},\ord{h}\r)$. Then
$$\begin{equation}
    \tpl{g,h}^l=\tpl{g^l,h^l}=\tpl{\l(g^\ord{g}\r)^{l/\ord{g}},\l(h^\ord{h}\r)^{l/\ord{h}}}=\tpl{e_G^{l/\ord{g}},e_H^{l/\ord{h}}}=\tpl{e_G,e_H},
\end{equation}$$
so suppose that $\tpl{g,h}^d=\tpl{e_G,e_H}$ for some $d\in\N^+$; it suffices to show that $l\leq d$. Observe then that
$$\begin{equation}
    g^d=e_G\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ h^d=e_H,
\end{equation}$$
so $\ord{g}$ and $\ord{h}$ both divide $d$. But $l$ is the _least_ common multiple of $\ord{g}$ and $\ord{h}$, so $l\divides d$, so $l\leq d$.<span style="float:right;">$\blacksquare$</span>
