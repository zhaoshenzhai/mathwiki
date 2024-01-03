<div class="topSpace"></div>

Date Created: 14/06/2023 20:00:25
References: #Ref/Alu09 #Ref/Ale15
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Recognition Theorem]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $N$ and $H$ be groups. For a fixed action $\theta$ of $H$ on $N$, the <b>semidirect product of $H$ on $N$ realizing $\theta$</b> is the group $N\semi_\theta H\coloneqq\tpl{N\times H,\blob_\theta}$ equipped with the operation $\tpl{n_1,h_1}\blob_\theta\tpl{n_2,h_2}\coloneqq\tpl{n_1\theta_{h_1}\!\l(n_2\r),h_1h_2}$.

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

<b>Remark.</b> Note that $N\semi_\theta H$ is the direct product $N\times H$ iff for all $\tpl{n_1,h_1},\tpl{n_2,h_2}\in N\times H$, we have $n_1\theta_{h_1}\!\l(n_2\r)=n_1n_2$. This occurs iff $\theta_{h_1}\!\l(n_2\r)=n_2$ for all $h_1$ and $n_2$, so $\theta_{h_1}=\id$ for all $h_1$. In other words, $N\semi_\theta H=N\times H$ iff $\theta$ is the trivial homomorphism.<span style="float:right;">$\blacklozenge$</span>
