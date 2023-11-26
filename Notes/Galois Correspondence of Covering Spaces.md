<div class="topSpace"></div>

Date Created: 24/05/2023 14:06:39
Tags: #Type/Theorem #In_Progress

Proved by: [[Lifting Criterion]], [[Covering Automorphisms and Monodromy#^covering-automorphism-universal-fundamental-group]], [[Covering space action]]
References: [[Existence of universal covers]]
Justifications: [[Covering Space#^isomorphic-covering-conjugate]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Galois Correspondence of Covering Spaces).

Let $\tpl{X,x_0}$ be a path-connected and locally path-connected pointed space with a universal covering space $p:\widetilde{X}\to X$. Every covering $q:\tpl{E,e_0}\to\tpl{X,x_0}$ induces a subgroup $q_\ast\pi_1\!\l(E,e_0\r)\subgrpeq\pi_1\!\l(X,x_0\r)$, and conversely every subgroup $H\subgrpeq\pi_1\!\l(X,x_0\r)$ arises from such a covering. Thus we have the following bijections:
$$\begin{equation}
    \begin{gathered}
        &\mc{C}\coloneqq\textrm{Basepoint-preserving isomorphism classes of covering maps of }X&&\longleftrightarrow&&\mc{D}\coloneqq\textrm{Subgroups of }\pi_1\!\l(X,x_0\r) \\
        &\mc{C}'\coloneqq\textrm{Isomorphism classes of covering maps of }X&&\longleftrightarrow&&\mc{D}'\coloneqq\textrm{Conjugacy classes of subgroups of }\pi_1\!\l(X,x_0\r)
    \end{gathered}
\end{equation}$$

```

<b>Remark.</b> If $X$ is also semilocally simply-connected, then $X$ always admits a universal cover $\widetilde{X}$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> That the correspondence $\mc{C}\to\mc{D}$ given by $\tpl{E,q}\mapsto q_\ast\pi_1\!\l(E,e_0\r)$ is injective follows from the Lifting Criterion. For surjectivity, let $H\subgrpeq\pi_1\!\l(X,x_0\r)$ be a subgroup and consider its image $\hat{H}\subgrpeq\Cov\,(\widetilde{X}/X)$ under the isomorphism $\Cov\,(\widetilde{X}/X)\iso\pi_1\!\l(X,x_0\r)$. Set $E\coloneqq\widetilde{X}/\hat{H}$, and since $\hat{H}\act\widetilde{X}$ acts by deck transformations, the canonical map $\pi:\widetilde{X}\onto E$ is a normal covering. The universal cover $p:\widetilde{X}\to X$ factors through the quotient into a map $q:E\to X$, which we claim is a covering map.
![[Images/2023-05-24_143333/image.svg|125]]
* Take $x\in X$ and choose a neighborhood $U\ni x$ evenly-covered by $p$. Let $V$ be any component in $q^{-1}\!\l(U\r)$, which is clopen since $E$ is locally path-connected. Thus $\pi^{-1}\!\l(V\r)$ is clopen in $\pi^{-1}\!\l(q^{-1}\!\l(U\r)\r)=p^{-1}\!\l(U\r)$, so it partitions into components of $p^{-1}\!\l(U\r)$. Let $\widetilde{U}\subseteq\pi^{-1}\!\l(V\r)$ be one such component, which evenly-covers $U$ and thus $p=q\circ\pi$ is a homeomorphism on $\widetilde{U}$. Thus $\pi$ is injective on $\widetilde{U}$. Furthermore, the components of $\pi^{-1}\!\l(V\r)$ are $\hat{H}$-translates of $\widetilde{U}$ which all project onto $V$, so, since $\pi$ is surjective, its restriction to $\widetilde{U}$ is surjective too. Being an open map, $\pi$ is a homeomorphism on $\widetilde{U}$, and thus $q$ is a homeomorphism on $\widetilde{U}$ too.

---

Define a relation $\sim_H$ by letting $\l[\gamma\r]\sim_H\!\l[\gamma'\r]$ iff $\gamma\l(1\r)=\gamma'\l(1\r)$ and $\l[\gamma\ast\gamma'^-\r]\in H$. Since $H$ is a subgroup, this relation is an equivalence relation and we let $\widetilde{X}_H\coloneqq\widetilde{X}/\!\sim_H$. Then $p:\widetilde{X}\to X$ descends to a map $q:\widetilde{X}_H\to X$ sending equivalence classes of $\l[\gamma\r]$ under $\sim_H$ to $\gamma\l(1\r)$, which is well-defined. In other words, define $q$ so that
commutes. Letting $\widetilde{X}_H$ carry the quotient topology ensures that $q$ is continuous. Also, $q$ is a covering map since if any two points in $\widetilde{U}_\gamma$ and $\widetilde{U}_{\gamma'}$ with $\gamma\l(1\r)=\gamma'\l(1\r)$ are identified under $\sim_H$, say $\l[\gamma\ast\delta\r]\sim_H\!\l[\gamma'\ast\delta\r]$, then $\l[\gamma\r]\sim_H\!\l[\gamma'\r]$ which shows that the entire neighborhoods $\widetilde{U}_\gamma$ and $\widetilde{U}_{\gamma'}$ are identified. Since $p$ is a covering map, the sheets $\widetilde{U}_\gamma$ above any evenly-covered $U\subseteq X$ are identified ‘evenly’, so $q^{-1}\!\l(U\r)$ partitions into equivalence classes $\widetilde{U}_{\gamma,H}$ of $\widetilde{U}_\gamma$. Finally, $\l.q\r|_{\widetilde{U}_{\gamma,H}}\!:\widetilde{U}_{\gamma,H}\to U$ is also an open bijection, so $q$ is a covering map. Now, let $\widetilde{x}_0\in\widetilde{X}_H$ be the equivalence class of the homotopy class of the constant loop $\epsilon$ at $x_0$. For all loops $\gamma$ at $x_0$, observe that its lift $\widetilde{\gamma}$ to $\widetilde{X}$ is a path starting at $\l[\epsilon\r]$ and ending at $\l[\gamma\r]$. Thus for $\widetilde{\gamma}$ to descend to a loop at $\widetilde{x}_0$, we need $\l[\epsilon\r]\sim_H\!\l[\gamma\r]$, which occurs iff $\l[\gamma\r]=\l[\gamma\ast\epsilon^-\r]\in H$. This shows that loops at $x_0$ whose lifts to $\widetilde{X}_H$ are loops at $\widetilde{x}_0$ is precisely $H$, as desired.
