<div class="topSpace"></div>

Date Created: 24/05/2023 14:06:39
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Lifting Criterion]], [[Covering Automorphisms and Monodromy#^covering-automorphism-universal-fundamental-group]], [[Covering Space Action]], [[Covering Automorphisms and Monodromy]]
References: [[Existence of universal covers]]
Justifications: [[Covering Space#^isomorphic-covering-conjugate]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Galois Correspondence of Covering Spaces).

Let $\tpl{X,x_0}$ be a path-connected and locally path-connected pointed space with a universal covering space $p:\widetilde{X}\to X$. Every covering $q:\tpl{E,e_0}\to\tpl{X,x_0}$ induces a subgroup $q_\ast\pi_1\!\l(E,e_0\r)\substructeq\pi_1\!\l(X,x_0\r)$, and conversely every subgroup $H\substructeq\pi_1\!\l(X,x_0\r)$ arises from such a covering. Thus we have the following bijections:
$$\begin{equation}
    \begin{gathered}
        &\mc{C}\coloneqq\textrm{Basepoint-preserving isomorphism classes of covering maps of }X&&\longleftrightarrow&&\mc{D}\coloneqq\textrm{Subgroups of }\pi_1\!\l(X,x_0\r) \\
        &\mc{C}'\coloneqq\textrm{Isomorphism classes of covering maps of }X&&\longleftrightarrow&&\mc{D}'\coloneqq\textrm{Conjugacy classes of subgroups of }\pi_1\!\l(X,x_0\r)
    \end{gathered}
\end{equation}$$

```

<b>Remark.</b> If $X$ is also semilocally simply-connected, then $X$ always admits a universal cover $\widetilde{X}$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> That the correspondence $\mc{C}\to\mc{D}$ given by $\tpl{E,q}\mapsto q_\ast\pi_1\!\l(E,e_0\r)$ is injective follows from the Lifting Criterion. For surjectivity, let $H\substructeq\pi_1\!\l(X,x_0\r)$ be a subgroup and consider its image $\hat{H}\substructeq\Cov\,(\widetilde{X}/X)$ under the isomorphism $\Cov\,(\widetilde{X}/X)\iso\pi_1\!\l(X,x_0\r)$. Set $E\coloneqq\widetilde{X}/\hat{H}$, and since $\hat{H}\act\widetilde{X}$ acts by deck transformations, the canonical map $\pi:\widetilde{X}\onto E$ is a normal covering. The universal cover $p:\widetilde{X}\to X$ factors through the quotient into a map $q:E\to X$, which we claim is a covering map.
![[Images/2023-05-24_143333/image.svg|125]]
* Take $x\in X$ and choose a neighborhood $U\ni x$ evenly-covered by $p$. Let $V$ be any component in $q^{-1}\!\l(U\r)$, which is clopen since $E$ is locally path-connected. Thus $\pi^{-1}\!\l(V\r)$ is clopen in $\pi^{-1}\!\l(q^{-1}\!\l(U\r)\r)=p^{-1}\!\l(U\r)$, so it partitions into components of $p^{-1}\!\l(U\r)$. Let $\widetilde{U}\subseteq\pi^{-1}\!\l(V\r)$ be any such component, which evenly-covers $U$ and thus $p=q\circ\pi$ is a homeomorphism on $\widetilde{U}$. Thus $\pi$ is injective on $\widetilde{U}$. Furthermore, the components of $\pi^{-1}\!\l(V\r)$ are $\hat{H}$-translates of $\widetilde{U}$ which all project onto $V$, so, since $\pi$ is surjective and is transitive on fibers, its restriction to $\widetilde{U}$ is surjective too. Finally, $\pi$ is an open map and thus is a homeomorphism on $\widetilde{U}$, and shows that $q$ is a homeomorphism on $\widetilde{U}$ too.

It remains to show that $H=q_\ast\pi_1\!\l(E,e_0\r)$ for some $e_0\in q^{-1}\!\l(x_0\r)$. To this end, fix $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$ and set $e_0\coloneqq\pi\l(\widetilde{x}_0\r)$. Note that $q_\ast\pi_1\!\l(E,e_0\r)$ is the stabilizer of $e_0$ under the Monodromy action $\pi_1\!\l(X,x_0\r)\act q^{-1}\!\l(x_0\r)$, so it suffices to show that $\gamma\cdot e_0=e_0$ iff $\gamma\in H$. Indeed, $\pi$ restricts to a $\pi_1\!\l(X,x_0\r)$-equivariant map between fibers, so
$$\begin{equation}
    \gamma\cdot e_0=\gamma\cdot\pi\l(\widetilde{x}_0\r)=\pi\l(\gamma\cdot\widetilde{x}_0\r)=\pi\l(\phi_\gamma\l(\widetilde{x}_0\r)\r)
\end{equation}$$
where $\phi_\gamma\in\Cov\,(\widetilde{X}/X)$ is the unique map obtained from the isomorphism $\Cov\,(\widetilde{X}/X)\iso\pi_1\!\l(X,x_0\r)$. But $\pi\l(\phi_\gamma\!\l(\widetilde{x}_0\r)\r)=\pi\l(\widetilde{x}_0\r)$ iff $\phi_\gamma\in\hat{H}$, which occurs iff $\gamma\in H$.<span style="float:right;">$\blacksquare$</span>
