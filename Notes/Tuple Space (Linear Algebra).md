<br />
<br />

Date Created: 27/03/2022 22:00:57
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Real Coordinate Space]]
Constructions: [[Standard Basis of Tuple Space]]
Generalizations: _Not Applicable_

Properties: [[Linear map on tuple spaces is induced by a unique matrix]]
Sufficiencies: [[Standard Representation of Finite-dim. Vector Spaces]]
Equivalences: [$V\iso K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md)
Justifications: [[Function space over a field is a vector space]]

``` ad-Definition
title: Definition.

_Let $\tpl{K,+,\cdot}$ be a field and fix $n\in\N^\ast$. The **$n$-tuple space over $K$** is the vector space $\tpl{K^n,K,\oplus,\odot,\v{0}}$ over $K$, where $\v{0}\coloneqq\tpl{0,\dots,0}$ and_
$$\begin{equation}
    \begin{aligned}
        \oplus:K^n\times K^n&\to K^n\\
        \tpl{\v{x},\v{y}}&\mapsto\tpl{x_1+y_1,\dots,x_n+y_n}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \odot:K\times K^n&\to K^n\\
        \tpl{\alpha,\v{x}}&\mapsto\tpl{\alpha\cdot x_1,\dots,\alpha\cdot x_n}.
    \end{aligned}
\end{equation}$$

```

**Remark.** Vectors in a tuple space will generally be denoted in boldface (especially if $K=\R$). This is done since we can associate to each vector $\v{x}\in K^n$ an $n\times1$ matrix $\l[x_i\r]$, and conversely associate to each $n\times 1$ matrix $\l[x_i\r]$ a vector $\v{x}\in K^n$; formally, we define an isomorphism
$$\begin{equation}
    \begin{aligned}
        f:K^n&\simto\mat{1\times n}{K} \\
        \v{x}&\mapsto\l[x_i\r]
    \end{aligned}
\end{equation}$$
where it can easily be verified that it is invertible. As such, no distinction (unless context necessitates it) will be made between the two. We will usually typeset such matrices as the transpose of a row-matrix instead (since columns take up too much vertical space).<span style="float:right;">$\blacklozenge$</span>
