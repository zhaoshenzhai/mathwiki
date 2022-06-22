<br />
<br />

Date Created: 21/06/2022 14:32:35
Tags: #Proposition #Closed

Proved by: [[Unique Representation Theorem (Hamel)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V_1,\dots,V_m$ be finite-dimensional vector spaces over some field $K$. Then_
$$\begin{equation}
    \dim\prod_{i=1}^mV_m=\sum_{i=1}^m\dim V_i.
\end{equation}$$

```

_Proof_. For each $i\in\l\{1,\dots,m\r\}$, let $d_i\coloneqq\dim V_i$ and let $\mc{B}_i\coloneqq\l\{b_{i1},\dots,b_{id_i}\r\}$ be a basis of $V_i$. We claim that the indexed set
$$\begin{equation}
    \mc{C}\coloneqq\l\{c_{ij}\r\}_{
    \begin{aligned}
        i&\in\l\{1,\dots,m\r\} \\
        j&\in\l\{1,\dots,d_i\r\}
    \end{aligned}
    }\in\prod_{i=1}^mV_i\ \ \ \ \ \ \ \ \textrm{where}\ \ \ \ \ \ \ \ 
    c_{ij}\coloneqq\tpl{\delta_{i1}^1b_{ij},\dots,\delta_{im}^mb_{ij}}
\end{equation}$$
containing $\l(\sum_{i=1}^md_i\r)$-many vectors form a basis of $\prod_{i=1}^mV_i$, from which the result follows. Intuitively, each $c_{ij}$ is the $m$-tuple whose $i^\textrm{th}$ component is the $j^\textrm{th}$ basis vector of $V_i$ and is zero everywhere else. Note that the function
$$\begin{equation}
    \delta^k:\l\{1,\dots,m\r\}\times\l\{1,\dots,m\r\}\to\l\{0_{V_k},1\r\}\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ 
    \tpl{i,k}\mapsto
        \begin{dcases}
            1 & \textrm{if }i=k \\
            0_{V_k} & \textrm{else}
        \end{dcases}
\end{equation}$$
is a modified version of the Kronecker Delta in order to obtain the appropriate zeros, and the lexicographical order on $\l\{1,\dots,d_i\r\}\times\l\{1,\dots,m\r\}$ is used to make $\mc{C}$ into an ordered basis.

It remains to show that $\mc{C}$ is a basis of $\prod_{i=1}^mV_i$, which we shall do so by showing that each $v\in\prod_{i=1}^mV_i$ can be uniquely represented as a linear combination of elements in $\mc{C}$. Since $v\in\prod_{i=1}^mV_i$, we see that $v=\tpl{v_1,\dots,v_m}$ for some unique vectors $v_i\in V_i$, each of which can be uniquely represented as a linear combination of vectors in $\mc{B}_i$ with the scalars $\alpha_{ij}\in K$ as
$$\begin{equation}
    v_i=\sum_{j=1}^{d_i}\alpha_{ij}b_{ij}.\tag{$\ast$}
\end{equation}$$
These scalars are precisely the scalars for which the linear combination of vectors in $\mc{C}$ produces $v$, since
$$\begin{align}
    \sum_{i=1}^m\sum_{j=1}^{d_i}\alpha_{ij}c_{ij}&=\sum_{i=1}^m\sum_{j=1}^{d_i}\alpha_{ij}\tpl{\delta_{i1}^1b_{ij},\dots,\delta_{im}^mb_{ij}} && \textrm{Definition of $c_{ij}$} \\
    &=\tpl{\sum_{i=1}^m\sum_{j=1}^{d_i}\delta_{i1}^1\alpha_{ij}b_{ij},\dots,\sum_{i=1}^m\sum_{j=1}^{d_i}\delta_{im}^m\alpha_{ij}b_{ij}} && \textrm{Definition of operations on $\prod_{i=1}^mV_i$} \\
    &=\tpl{\sum_{j=1}^{d_1}\delta_{11}^1\alpha_{1j}b_{1j},\dots,\sum_{j=1}^{d_m}\delta_{mm}^m\alpha_{mj}b_{mj}} && \delta_{ik}^k\alpha_{ij}b_{ij}=0_{V_k}\textrm{ for all }i\neq k \\
    &=\tpl{\sum_{j=1}^{d_1}\alpha_{1j}b_{1j},\dots,\sum_{j=1}^{d_m}\alpha_{mj}b_{mj}} && \delta_{kk}^k=1\textrm{ for all }k \\
    &=\tpl{v_1,\dots,v_m} && \ref{\ast} \\
    &=v. && \textrm{Substitution}\qedin
\end{align}$$
