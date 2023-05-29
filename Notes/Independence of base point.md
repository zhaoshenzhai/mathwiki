<div class="topSpace"></div>

Date Created: 25/05/2023 12:57:37
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Basic properties of homotopies of paths]], [[Covering Homotopy Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a path-connected space. Then $\pi_1\l(X,x_0\r)\iso\pi_1\l(X,x_1\r)$ for all $x_0,x_1\in X$. Moreover, if $p:\widetilde{X}\to X$ is a covering of $X$ and $x_0\in X$, we have the following properties.
* For all $\widetilde{x},\widetilde{x}'\in p^{-1}\!\l(x_0\r)$, the subgroups $p_\ast\pi_1\,(\widetilde{X},\widetilde{x})$ and $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}')$ are conjugate.
* If $H\subgrpeq\pi_1\l(X,x_0\r)$ is conjugate to $p_\ast\pi_1\,(\widetilde{X},\widetilde{x})$ for some $\widetilde{x}\in p^{-1}\!\l(x_0\r)$, then $H=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}')$ for some $\widetilde{x}'\in p^{-1}\!\l(x_0\r)$.

```

_Proof_. Consider the map $\beta_\sigma:\pi_1\l(X,x_0\r)\to\pi_1\l(X,x_1\r)$ mapping $\l[\gamma\r]\mapsto\l[\sigma^-\ast\gamma\ast\sigma\r]$, which is well-defined. To see that $\beta_\sigma$ is a homomorphism, let $\gamma_0$ and $\gamma_1$ be loops at $x_0$ and compute
$$\begin{equation}
   \beta_\sigma\!\l(\l[\gamma_0\r]\l[\gamma_1\r]\r)=\beta_\sigma\!\l[\gamma_0\ast\gamma_1\r]=\l[\sigma^-\ast\gamma_0\ast\gamma_1\ast\sigma\r]=\l[\sigma^-\ast\gamma_0\ast\sigma\ast\sigma^-\ast\gamma_1\ast\sigma\r]=\l[\sigma^-\ast\gamma_0\ast\sigma\r]\l[\sigma^-\ast\gamma_1\ast\sigma\r]=\beta_\sigma\!\l[\gamma_0\r]\beta_\sigma\!\l[\gamma_1\r].
\end{equation}$$
Lastly, observe that $\beta_{\sigma^-}\!\l[\delta\r]=\l[\sigma\ast\delta\ast\sigma^-\r]$ for all loops $\delta$ at $x_1$ and is such that
$$\begin{equation}
    \l(\beta_{\sigma^-}\circ\beta_\sigma\r)\l[\gamma\r]=\beta_{\sigma^-}\!\l[\sigma^-\ast\gamma\ast\sigma\r]=\l[\sigma\ast\sigma^-\ast\gamma\ast\sigma\ast\sigma^-\r]=\l[\gamma\r]
\end{equation}$$
for all loops $\gamma$ at $x_0$, and similarly $\l(\beta_\sigma\circ\beta_{\sigma^-}\r)\l[\delta\r]=\l[\delta\r]$ or all loops $\delta$ at $x_1$, so $\beta_\sigma$ is invertible. Now, let $p:\widetilde{X}\to X$ be a path-connected covering map.
* Let $\widetilde{\sigma}$ be a path from $\widetilde{x}$ to $\widetilde{x}'$ and consider the map $\beta_\widetilde{\sigma}$ defined above. Projecting $\widetilde{\sigma}$ to a loop $\sigma$ at $x_0$ and consider the map $\beta_\sigma$, the diagram
![[Images/2023-05-25_131843/image.svg|225]] commutes. Indeed, $p_\ast\beta_{\widetilde{\sigma}}\!\l[\widetilde{\gamma}\r]=p_\ast\!\l[\widetilde{\sigma}^-\ast\widetilde{\gamma}\ast\widetilde{\sigma}\r]=\l[p\circ\l(\widetilde{\sigma}^-\ast\widetilde{\gamma}\ast\widetilde{\sigma}\r)\r]=\l[\l(p\circ\widetilde{\sigma}^-\r)\ast\l(p\circ\widetilde{\gamma}\r)\ast\l(p\circ\widetilde{\sigma}\r)\r]=\l[\sigma^-\ast\gamma\ast\sigma\r]=\beta_\sigma\!\l[\gamma\r]=\beta_\sigma p_\ast\!\l[\widetilde{\gamma}\r]$ for all loops $\widetilde{\gamma}$ at $\widetilde{x}$. It follows then that $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}')=p_\ast\beta_{\widetilde{\sigma}}\pi_1\,(\widetilde{X},\widetilde{x})=\beta_\sigma p_\ast\pi_1\,(\widetilde{X},\widetilde{x})$, so the subgroups $p_\ast\pi_1\,(\widetilde{X},\widetilde{x})$ _and_ $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}')$ are conjugate by $\l[\sigma\r]$.
* Suppose that $H=\l[\sigma\r]^-p_\ast\pi_1\,(\widetilde{X},\widetilde{x})\l[\sigma\r]$ for some loop $\sigma$ at $x_0$, which lifts to a path $\widetilde{\sigma}$ starting at $\widetilde{x}$ where $\widetilde{x}\coloneqq\widetilde{\sigma}\l(1\r)\in p^{-1}\!\l(x_0\r)$. The diagram above commutes, so
$$\begin{equation}
    H=\beta_\sigma p_\ast\pi_1\,(\widetilde{X},\widetilde{x})=p_\ast\beta_{\widetilde{\sigma}}\pi_1\,(\widetilde{X},\widetilde{x})=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}').\qedin
\end{equation}$$
