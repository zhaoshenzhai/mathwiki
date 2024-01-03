<div class="topSpace"></div>

Date Created: 14/06/2023 20:27:44
References:
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Recognition Theorem).

Let $N$, $H$, and $G$ be groups. The following are equivalent.
1. $G$ is a semidirect product of $H$ on $N$ realized by some action $\theta$ of $H$ on $N$.
2. There exists a right-split short exact sequence $1\to N\to G\to H\to 1$ and $\theta$ is the conjugation action of $H$ on $N$.
3. The groups $N$ and $H$ inject into $G$, $N\nsubgrpeq G$, $N\cap H=\l\{e\r\}$, and $G=NH$.

```

<i>Proof.</i>
* ($1\Rightarrow2$). If $G=N\semi_\theta H$, then the maps $\iota_N:n\mapsto\tpl{n,e}$ and $\iota_H:h\mapsto\tpl{e,h}$ are injective group homomorphisms since
$$\begin{equation}
    \tpl{n_1,e}\blob_\theta\tpl{n_2,e}=\tpl{n_1\theta_e\!\l(n_2\r),e}=\tpl{n_1n_2,e}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \tpl{e,h_1}\blob_\theta\tpl{e,h_2}=\tpl{e\theta_{h_1}\!\l(e\r),h_1h_2}=\tpl{e,h_1h_2}
\end{equation}$$
for all $n_1,n_2\in N$ and $h_1,h_2\in H$. Thus $N,H\into G$, and since the projection $\pi:\tpl{n,h}\mapsto h$ is a surjective homomorphism with $\pi\circ\iota_H=\id_H$ and $\ker\pi=\im\iota_H$, we obtain a split exact sequence $1\to N\to G\to H\to1$. Furthermore, we have
$$\begin{equation}
    \tpl{e,h}\blob_\theta\tpl{n,e}\blob_\theta\tpl{e,h}^{-1}=\tpl{\theta_h\!\l(n\r),h}\blob_\theta\tpl{\theta_{h^{-1}}\!\l(e\r),h^{-1}}=\tpl{\theta_h\!\l(n\r),h}\blob_\theta\tpl{e,h^{-1}}=\tpl{\theta_h\!\l(n\r)\theta_h\!\l(e\r),hh^{-1}}=\tpl{\theta_h\!\l(n\r),e},
\end{equation}$$
so $\theta_h\!\l(n\r)=hnh^{-1}$ after the identifications given above.
* ($2\Rightarrow3$). Let $\iota:N\into G$ and $\pi:G\onto H$ be the maps in the short exact sequence, with $\sigma:H\into G$ a section of $\pi$. Identifying $N$ and $H$ as subgroups of $G$ via $\iota$ and $s$, we see that $N=\ker\pi\nsubgrpeq G$. By exactness, we have $H\iso G/N$ via the isomorphism $\phi:G/N\to H:gN\mapsto\pi\l(g\r)$. Set $h\coloneqq\pi\l(g\r)$ and observe that
$$\begin{equation}
    \phi\l(\sigma\l(h\r)N\r)=\alpha\l(\sigma\l(h\r)\r)=h=\phi\l(gN\r),
\end{equation}$$
so $gN=\sigma\l(h\r)N$. Thus $g\sigma\l(h\r)^{-1}=\iota\l(n\r)$ for some $n\in N$, so $g=\iota\l(n\r)\sigma\l(h\r)$ uniquely. Thus $G=NH$ under the identifications. Furthermore, this shows $N\cap H=\l\{e\r\}$ since if $\iota\l(n\r)=\sigma\l(h\r)$, then $\iota\l(n\r)\sigma\l(e\r)=\iota\l(e\r)\sigma\l(h\r)$, then $\iota\l(n\r)=\sigma\l(h\r)=e$ by uniqueness.
* ($3\Rightarrow1$). Let $\theta$ be the conjugation action of $H$ on $N$ and consider the function $\phi:N\semi_\theta H\to G$ given by $\tpl{n,h}\to nh$. Since $G=NH$ and $N\cap H=\l\{e\r\}$, we see that $\phi$ is a bijection, and since
$$\begin{equation}
    \phi\l(\tpl{n_1,h_1}\blob_\theta\tpl{n_2,h_2}\r)=\phi\l(n_1\theta_{h_1}\!\l(n_2\r),h_1h_2\r)=\phi\l(n_1h_1n_2h_1^{-1},h_1h_2\r)=\l(n_1h_1n_2h_1^{-1}\r)\l(h_1h_2\r)=n_1h_1n_2h_2=\phi\l(n_1,h_1\r)\phi\l(n_2,h_2\r),
\end{equation}$$
we have the desired isomorphism.<span style="float:right;">$\blacksquare$</span>
