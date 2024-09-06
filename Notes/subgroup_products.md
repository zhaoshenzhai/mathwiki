---
title: Subgroup Products
date: 2024-07-15T16:15:16-04:00
references: [DF03]
tags: [Group_Theory/Later]
---

Let $G$ be a {{< link file="group.md" display="group" type="references" >}} and consider {{< link file="subgroup.md" display="subgroups" type="references" >}} $H,K\substructeq G$, whose *subgroup product* is
$$\begin{equation}
    HK\coloneqq\l\\{hk\in G\st h\in H,k\in K\r\\}.
\end{equation}$$
In general, this need *not* be a subgroup of $G$. Here, we give sufficient criteria in which this is the case. We also examine when $HK\nsubgrpeq G$ is a {{< link file="normal_subgroup.md" display="normal subgroup" type="references" >}}.

<br>

&emsp;&emsp;Note, however, that even if $HK\not\substructeq G$, we have $|HK|=|H||K|/|H\cap K|$ if both $H$ and $K$ are finite.

>{{< env type="proof" hide="true" >}}

Note that $HK=\bigcup_{h\in H}hK$, where any two $h_1K,h_2K$ either coincide or are disjoint. But $h_1K=h_2K$ iff $h_2^{-1}h_1\in H\cap K$, iff $h_1(H\cap K)=h_2(H\cap K)$, and so the number of distinct cosets $hK$ coincides with that of $h(H\cap K)$. By {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="references" >}}, there are $[H:H\cap K]=|H|/|H\cap K|$ distinct cosets $hK$, each of which has cardinality $|hK|=|K|$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

Finally, we relate $HK$ to the {{< link file="product_of_groups.md" display="product" type="references" >}} $H\times K$ and the {{< link file="semi-direct_product.md" display="semi-direct product" type="references" >}} $H\semi K$.

<h1 id="criteria_for_subgroup_product">Criteria for $HK\substructeq G$</h1>

We give a full characterization for when this is the case.

{{< env type="proposition" >}}

For subgroups $H,K\substructeq G$, we have $HK\substructeq G$ iff $HK=KH$.

{{< /env >}}

{{< env type="proof" hide="true" >}}

Suppose that $HK\substructeq G$. Since $H,K\substructeq HK$, we see that $KH\subseteq HK$ by closure: indeed, if $kh\in KH$, then $k,h\in HK$ and hence $kh\in HK$. Now take $hk\in HK$ and write $h'k'\coloneqq(hk)^{-1}\in HK$. Then
$$\begin{equation}
    hk=(h'k')^{-1}=k'^{-1}h'^{-1}\in KH,
\end{equation}$$
as desired. Conversely, suppose that $HK=KH$. Clearly $e=ee\in HK$. If $h_ik_i\in HK$ for $i=1,2$, then
$$\begin{equation}
    (h_1k_1)(h_2k_2)=h_1(k_1h_2)k_2=h_1(h'k')k_2=(h_1h')(k'k_2)\in HK
\end{equation}$$
for some $h'\in H$ and $k'\in K$. A similar trick works for inverses, so $HK\substructeq G$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

In particular, this holds when $G$ is {{< link file="abelian_group.md" display="abelian" type="references" >}}, or more generally, if either $H\substructeq N_G(K)$ or $K\substructeq N_G(H)$. The latter occurs, in particular, when either $H\nsubgrpeq G$ or $K\nsubgrpeq G$.

## Normality of $HK$

Not much in addition is required for $HK\nsubgrpeq G$. Indeed, we only need that *both* $H\nsubgrpeq G$ and $K\nsubgrpeq G$ (as opposed to either/or).

>{{< env type="proof" hide="true" >}}

We have $HK\substructeq G$. Take $hk\in HK$ and $g\in G$, and observe that
$$\begin{equation}
    g(hk)g^{-1}=(ghg^{-1})(gkg^{-1})\in HK.\qedin
\end{equation}$$

{{< /env >}}

# Relation between $HK$, $H\semi K$, and $H\times K$
