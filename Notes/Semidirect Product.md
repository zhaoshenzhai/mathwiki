<div class="topSpace"></div>

Date Created: 14/06/2023 20:00:25
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Recognition Theorem]]
Justifications: [[Isomorphism Theorems]]

``` ad-Definition
title: Definition.

Let $N$ and $H$ be groups. For a fixed action $\theta$ of $H$ on $N$, the <b>semidirect product of $H$ on $N$ realizing $\theta$</b> is the group $N\semi_\theta H\coloneqq\tpl{N\times H,\blob_\theta}$ equipped with the operation $\tpl{n_1,h_1}\blob_\theta\tpl{n_1,h_2}\coloneqq\tpl{n_1\theta_{h_1}\!\l(n_2\r),h_1h_2}$.

```

<b>Remark.</b> The computation
$$\begin{equation}
    \begin{gathered}
        \l[\tpl{n_1,h_1}\blob_\theta\tpl{n_2,h_2}\r]\blob_\theta\tpl{n_3,h_3}=\tpl{n_1\theta_{h_1}\!\l(n_2\r),h_1h_2}\blob_\theta\tpl{n_3,h_3}=\tpl{n_1\theta_{h_1}\!\l(n_2\r)\theta_{h_1h_2}\!\l(n_3\r),h_1h_2h_3} \\
        \tpl{n_1,h_1}\blob_\theta\l[\tpl{n_2,h_2}\blob_\theta\tpl{n_3,h_3}\r]=\tpl{n_1,h_1}\blob_\theta\tpl{n_2\theta_{h_2}\!\l(n_3\r),h_2h_3}=\tpl{n_1\theta_{h_1}\!\l(n_2\theta_{h_2}\!\l(n_3\r)\r),h_1h_2h_3}=\tpl{n_1\theta_{h_1}\!\l(n_2\r)\theta_{h_1h_2}\!\l(n_3\r),h_1h_2h_3}
    \end{gathered}
\end{equation}$$
shows that $\blob_\theta$ is associative. It is clear that $\tpl{e,e}$ is the identity element and that $\tpl{n,h}^{-1}=\tpl{\theta_{h^{-1}}\!\l(n^{-1}\r),h^{-1}}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Observe that if $H,N\subgrpeq G$ and $N\nsubgrpeq G$ such that $G=NH$ and $H\cap N=\l\{e\r\}$, then $G$ is a semidirect product of $H$ on $N$.
* Indeed, we construct the short exact sequence by the inclusion $\iota:N\to G$, and we show that $H\iso G/N$ via the isomorphism $\lambda:H\into G\onto G/N$ where $H\into G$ is the section and $G\onto G/N$ is the projection. That $\lambda$ is injective is clear, for $\ker\lambda=\l\{h\in H\mid hN=N\r\}=H\cap N=\l\{e\r\}$. To show that $\lambda$ is surjective, take $g\in G$, so $g=nh$ for some $n\in N$ and $h\in H$. Thus $gN=nhN=h\l(h^{-1}nh\r)N=hN=\lambda\l(h\r)$ where $h^{-1}nh\in N$ since $N\nsubgrpeq G$, as desired.<span style="float:right;">$\blacklozenge$</span>
