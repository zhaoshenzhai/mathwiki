<div class="topSpace"></div>

Date Created: 14/06/2023 20:27:44
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Recognition Theorem).

Let $N$, $H$, and $G$ be groups. Then $G$ is a semidirect product of $H$ on $N$ iff there exists a right-split short exact sequence $1\to N\to G\to H\to 1$, in which case the action $\gamma$ of $H$ on $N$ realizing the semidirect product is $\gamma_h\!\l(n\r)=hnh^{-1}$ after the identifications $n\mapsto\tpl{n,e}$ and $h\mapsto\tpl{e,h}$.

```

<i>Proof.</i> We first prove that a short exact sequence $1\to N\to G\to H\to1$ splits iff
* The maps $\iota_N:n\mapsto\tpl{n,e}$ and $\iota_H:h\mapsto\tpl{e,h}$ are clearly injections, and they are group homomorphisms since
$$\begin{equation}
    \tpl{n_1,e}\blob_\theta\tpl{n_2,e}=\tpl{n_1\theta_e\!\l(n_2\r),e}=\tpl{n_1n_2,e}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \tpl{e,h_1}\blob_\theta\tpl{e,h_2}=\tpl{e\theta_{h_1}\!\l(e\r),h_1h_2}=\tpl{e,h_1h_2}
\end{equation}$$
for all $n_1,n_2\in N$ and $h_1,h_2\in H$. Thus $N,H\into G$, and since the projection $\pi:\tpl{n,h}\mapsto h$ is a surjective homomorphism with $\pi\circ\iota_H=\id_H$ and $\ker\pi=\im\iota_H$, we obtain a split exact sequence $0\to N\to G\to H\to0$. Under the identifications, it is clear that $N\cap H=\l\{e\r\}$. Since $\tpl{n,h}=\tpl{n,e}\blob_\theta\tpl{e,h}$ for all $\tpl{n,h}\in G$, we see that $G=NH$ too.
* Since $G$ is a semidirect product of $H$ on $N$, we may as above identify $N$ and $H$ as subgroups of $G$ via the homomorphisms $n\mapsto\tpl{n,e}$ and $h\mapsto\tpl{e,h}$, making $N\cap H=\l\{e\r\}$ and $G=NH$. The bijection $\phi:N\semi_\gamma H\to G$ defined by $\tpl{n,h}\mapsto nh$ then establishes the isomorphism, since
$$\begin{equation}
    \phi\l(\tpl{n_1,h_1}\blob_\gamma\tpl{n_2,h_2}\r)=\phi\l(n_1\gamma_{h_1}\!\l(n_2\r),h_1h_2\r)=\phi\l(n_1h_1n_2h_1^{-1},h_1h_2\r)=\l(n_1h_1n_2h_1^{-1}\r)\l(h_1h_2\r)=n_1h_1n_2h_2=\phi\l(n_1,h_1\r)\phi\l(n_2,h_2\r).\qedin
\end{equation}$$
