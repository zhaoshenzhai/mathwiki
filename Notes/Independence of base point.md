<div class="topSpace"></div>

Date Created: 26/12/2023 21:46:18
References:
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Basic properties of homotopies of paths]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

If $f:X\to Y$ is a homotopy equivalence, then the induced map $f_\ast:\pi_1\!\l(X,x_0\r)\to\pi_1\!\l(Y,f\l(x_0\r)\r)$ is an isomorphism for every $x_0\in X$.
* If $X$ and $Y$ are path-connected spaces such that $X\htopeq Y$, then $\pi_1\!\l(X\r)\iso\pi_1\!\l(Y\r)$. In particular, if $X$ is contractible, then $\pi_1\!\l(X\r)\iso\l\{1\r\}$.
* If $\phi_i:\tpl{X,x_0}\to\tpl{Y,y_0}$ are homotopic for $i=0,1$, then $\phi_{0\ast}$ and $\phi_{1\ast}$ are conjugate.

```

<i>Proof.</i> We need a lemma, that if $\phi_t:X\to Y$ is a homotopy, $\gamma:t\mapsto\phi_t\!\l(x_0\r)$ is the path traced by $\phi_t\!\l(x_0\r)$, and $\beta_\gamma\!\l[\eta\r]\coloneqq\l[\gamma\ast\eta\ast\gamma^-\r]$, then the diagram below commutes.
![[Images/2023-05-21_113729/image.svg|230]] Indeed, let $\tau$ be a loop at $x_0$. We establish a homotopy $\phi_0\circ\tau\htopeq\beta_\gamma\circ\phi_1\circ\tau$ as follows. Let $\gamma_t\!\l(s\r)\coloneqq\gamma\l(st\r)$ for each $t\in I$. Since $\gamma_t\!\l(1\r)=\l(\phi_t\circ\tau\r)\l(0\r)$, we see that $\gamma_t\ast\l(\phi_t\circ\tau\r)\ast\gamma_t^-$ is a well-defined loop at $\phi_0\!\l(x_0\r)$. Varying $t$ continuous gives us a homotopy from $\phi_0\circ\tau$ to $\beta_\gamma\circ\phi_1\circ\tau$, as desired. Now, if $f:X\to Y$ is a homotopy equivalence, then there is a map $g:Y\to X$ such that $f\circ g\htopeq\id_Y$ and $g\circ f\htopeq\id_X$. Consider now the sequence
$$\begin{equation}
    \pi_1\!\l(X,x_0\r)\overset{f_\ast}{\longrightarrow}\pi_1\!\l(Y,f\l(x_0\r)\r)\overset{g_\ast}{\longrightarrow}\pi_1\!\l(X,gf\l(x_0\r)\r).
\end{equation}$$
Since $g\circ f\htopeq\id_X$, the above lemma gives $g_\ast\circ f_\ast=\beta_\gamma$ where $\gamma$ is the path traced by the homotopy. Since $\beta_\gamma$ is an isomorphism, we see that $f_\ast$ is injective. A similar sequence gives us $f_\ast\circ g_\ast=\beta_{\gamma'}$ where $\gamma'$ is the path traced by the other homotopy, so $f_\ast$ is an isomorphism.
* If $f:X\to Y$ is a homotopy equivalence, then the above gives us $\pi_1\!\l(X,x_0\r)\iso\pi_1\l(Y,f\l(x_0\r)\r)$, and path-connected of $X$ and $Y$ allows us to ignore basepoints.
* Let $\phi_t:\tpl{X,x_0}\to\tpl{Y,y_0}$ witness this homotopy. The path $\gamma$ traced by $\phi_t$ is now a loop at $y_0$ and thus $\phi_{0\ast}=\l[\gamma\r]\phi_{1\ast}\l[\gamma\r]^{-1}$ by the lemma.<span style="float:right;">$\blacksquare$</span>
