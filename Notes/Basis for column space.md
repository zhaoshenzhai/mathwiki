<br />
<br />

Date Created: 09/06/2022 12:26:44
Tags: #Proposition #Closed

Proved by: [Row-equivalence of matrices $\Leftrightarrow$ factors through invertible matrix](Row-equivalence%20of%20matrices%20iff%20factors%20through%20invertible%20matrix.md), [Matrix multiplication (columns$\slash$rows)](Matrix%20multiplication%20(columns%20slash%20rows).md), [[Standard basis of tuple space is an ordered basis]], [Rank of matrix in RREF is $|$pivot columns$|\slash|$non-zero rows$|$](Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md), [Linearly independent $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis](Linearly%20independent%20set%20with%20same%20cardinality%20as%20dimension%20(finite)%20is%20a%20basis.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ with $r\coloneqq\rank A$ for some fixed $m,n,r\in\N^\ast$. Let $B\in\mat{m\times n}{K}$ be a reduced row-echelon form of $A$, and let each $k_i\in K$ denote the pivot column in $B$ corresponding to its $i^\textrm{\it{th}}$ row. Then the columns_ $\l\{\v{a}_{k_1},\dots,\v{a}_{k_r}\r\}$ _of $A$ form a basis for $\col A$._

```

**Remark.** In particular, if $\v{b}_j=\sum_{i=1}^r\beta_{ij}\v{e}_j$ for some $\beta_{ij}\in K$ (which is always the case), then $\v{a}_j=\sum_{i=1}^r\beta_{ij}\v{a}_{k_i}$. Thus if the coefficients of $\v{a}_j$ are uniquely-determined, so are the coefficients of $\v{b}_j$. Furthermore, if $A$ is unknown but we know the columns corresponding to pivots in its reduced row-echelon form, we can deduce the rest of its columns.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Firstly, observe that since $B$ is in reduced row-echelon form, we have $\v{b}_{k_i}=\v{e}_i$ for all $i\in\l\{1,\dots,r\r\}$.
* (Linear independence): Suppose that there are coefficients $\alpha_1,\dots,\alpha_r\in K$ such that $\sum_{i=1}^r\alpha_i\v{a}_{k_i}=\v{0}$. Since $B\sim A$, there exists an invertible matrix $C\in\mat{m}{K}$ such that $B=CA$. Left-multiplying, we see that
$$\begin{equation}
    \sum_{i=1}^r\alpha_i\l(C\v{a}_{k_i}\r)=\v{0},
\end{equation}$$
and since $C\v{a}_{k_i}=\v{b}_{k_i}=\v{e}_i$, we have $\sum_{i=1}^r\alpha_i\v{e}_i=\v{0}$. The result follows by linear independence of $\l\{\v{e}_1,\dots,\v{e}_r\r\}$.

* (Spanning set): Since $r=\rank B=\dim\col B$ is the number of pivot columns of $B$ and $\l\{\v{b}_{k_1},\dots,\v{b}_{k_r}\r\}=\l\{\v{e}_1,\dots,\v{e}_r\r\}$ is linearly independent, we see that $\l\{\v{e}_1,\dots,\v{e}_r\r\}$ forms a basis for the columns of $B$. Thus for all columns $\v{b}_j$ of $B$, there exist coefficients $\beta_{ij}\in K$ such that $\v{b}_j=\sum_{i=1}^r\beta_{ij}\v{e}_i$, and since $C\v{a}_j=\v{b}_j$ for all $j\in\l\{1,\dots,n\r\}$, we have
$$\begin{equation}
    \begin{aligned}
        \v{a}_j&=C^{-1}\v{b}_j && \textrm{Left-multiply by $C^{-1}$} \\
        &=C^{-1}\l(\sum_{i=1}^r\beta_{ij}\v{e}_i\r) && \textrm{Substitution} \\
        &=\sum_{i=1}^r\beta_{ij}C^{-1}\v{b}_{k_i} && \v{b}_{k_i}=\v{e}_i \\
        &=\sum_{i=1}^r\beta_{ij}\v{a}_{k_i} && C\v{a}_{k_i}=\v{b}_{k_i}
    \end{aligned}
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$.<span style="float:right;">$\blacksquare$</span>
