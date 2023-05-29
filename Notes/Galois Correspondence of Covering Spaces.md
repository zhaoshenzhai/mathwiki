<div class="topSpace"></div>

Date Created: 24/05/2023 14:06:39
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Existence of universal covers]], [[Basic properties of covering spaces]], [[Characterizations of equivalent covering maps]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Galois Correspondence of Covering Spaces).

Let $\tpl{X,x_0}$ be a path-connected, locally path-connected, and semilocally simply-connected pointed space. For every subgroup $H\subgrpeq\pi_1\l(X,x_0\r)$, there exists a covering map $q:\widetilde{X}_H\to X$ and a point $\widetilde{x}_0$ such that $q_\ast\pi_1(\widetilde{X}_H,\widetilde{x}_0)=H$. Furthermore, we have the following bijections.
$$\begin{equation}
    \begin{gathered}
        &\textrm{Basepoint-preserving isomorphism classes of covering maps of }X&&\longleftrightarrow&&\textrm{Subgroups of }\pi_1\l(X,x_0\r) \\
        &\textrm{Isomorphism classes of covering maps of }X&&\longleftrightarrow&&\textrm{Conjugacy classes of subgroups of }\pi_1\l(X,x_0\r)
    \end{gathered}
\end{equation}$$

```

<i>Proof.</i> Let $p:\widetilde{X}\to X$ be the universal cover of $X$ constructed by setting $\widetilde{X}\coloneqq\l\{\l[\gamma\r]\mid\gamma:I\to X\textrm{\ and\ }\gamma\l(0\r)=x_0\r\}$ and $p\l[\gamma\r]\coloneqq\gamma\l(1\r)$. The basis of the topology on $\widetilde{X}$ consist of sets $\widetilde{U}_\gamma$, where $U\subseteq X$ is a path-connected subset with $\iota_\ast:\pi_1\l(U\r)\into\pi_1\l(X\r)$ being trivial and $\gamma:I\to X$ is a path starting at $x_0$ and ending in $U$, which consist of all $\l[\gamma\ast\delta\r]$ for paths $\delta:I\to U$ compatible with $\gamma$. Furthermore, for all $\l[\gamma_t\r]\in\widetilde{X}$, the path $\widetilde{\gamma}:t\mapsto\l[\gamma_t\r]$ ,where $\gamma_t:I\to X$ is the path that coincides with $\gamma$ on $\l[0,t\r]$ and is the constant path at $\gamma\l(t\r)$ on $\l[t,1\r]$, is a lift of $\gamma$ to $\widetilde{X}$.

Define a relation $\sim_H$ by letting $\l[\gamma\r]\sim_H\!\l[\gamma'\r]$ iff $\gamma\l(1\r)=\gamma'\l(1\r)$ and $\l[\gamma\ast\gamma'^-\r]\in H$. Since $H$ is a subgroup, this relation is an equivalence relation and we let $\widetilde{X}_H\coloneqq\widetilde{X}/\!\sim_H$. Then $p:\widetilde{X}\to X$ descends to a map $q:\widetilde{X}_H\to X$ sending equivalence classes of $\l[\gamma\r]$ under $\sim_H$ to $\gamma\l(1\r)$, which is well-defined. In other words, define $q$ so that
![[Images/2023-05-24_143333/image.svg|150]]commutes. Letting $\widetilde{X}_H$ carry the quotient topology ensures that $q$ is continuous. Also, $q$ is a covering map since if any two points in $\widetilde{U}_\gamma$ and $\widetilde{U}_{\gamma'}$ with $\gamma\l(1\r)=\gamma'\l(1\r)$ are identified under $\sim_H$, say $\l[\gamma\ast\delta\r]\sim_H\!\l[\gamma'\ast\delta\r]$, then $\l[\gamma\r]\sim_H\!\l[\gamma'\r]$ which shows that the entire neighborhoods $\widetilde{U}_\gamma$ and $\widetilde{U}_{\gamma'}$ are identified. Since $p$ is a covering map, the sheets $\widetilde{U}_\gamma$ above any evenly-covered $U\subseteq X$ are identified $\textrm{`}$evenly$\textrm{'}$, so $q^{-1}\!\l(U\r)$ partitions into equivalence classes $\widetilde{U}_{\gamma,H}$ of $\widetilde{U}_\gamma$. Finally, $\l.q\r|_{\widetilde{U}_{\gamma,H}}\!:\widetilde{U}_{\gamma,H}\to U$ is also an open bijection, so $q$ is a covering map. Now, let $\widetilde{x}_0\in\widetilde{X}_H$ be the equivalence class of the homotopy class of the constant loop $\epsilon$ at $x_0$. For all loops $\gamma$ at $x_0$, observe that its lift $\widetilde{\gamma}$ to $\widetilde{X}$ is a path starting at $\l[\epsilon\r]$ and ending at $\l[\gamma\r]$. Thus for $\widetilde{\gamma}$ to descend to a loop at $\widetilde{x}_0$, we need $\l[\epsilon\r]\sim_H\!\l[\gamma\r]$, which occurs iff $\l[\gamma\r]=\l[\gamma\ast\epsilon^-\r]\in H$. This shows that loops at $x_0$ whose lifts to $\widetilde{X}_H$ are loops at $\widetilde{x}_0$ is precisely $H$, as desired.

Now for the bijections.
* Equivalent covering maps that preserve basepoints induce the same subgroup of $\pi_1\l(X,x_0\r)$.
* Equivalent covering maps (that do not necessarily preserve basepoints) induce the same conjugacy class of $\pi_1\l(X,x_0\r)$.<span style="float:right;">$\blacksquare$</span>
