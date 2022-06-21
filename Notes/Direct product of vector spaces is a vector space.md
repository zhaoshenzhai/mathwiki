<br />
<br />

Date Created: 21/06/2022 08:50:28
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$. Then their direct product $V\times W$ is a vector space over $K$._

```

_Proof_. The addition and scalar-multiplication operations on $V\times W$ are
$$\begin{equation}
    \begin{aligned}
        \oplus:\l(V\times W\r)\times\l(V\times W\r)&\to V\times W \\
        \tpl{\tpl{v_1,w_1},\tpl{v_2,w_2}}&\mapsto\tpl{v_1+v_2,w_1+w_2}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \odot:K\times\l(V\times W\r)&\to V\times W \\
        \tpl{\alpha,\tpl{v,w}}&\mapsto\tpl{\alpha\cdot v,\alpha\cdot w}.
    \end{aligned}
\end{equation}$$
We need to check that $\tpl{V\times W,\oplus}$ is an Abelian group and that the rest of the vector space axioms hold.
* (Abelian group): Let $0_V$ and $0_W$ denote the zero vectors in $V$ and $W$, respectively, and set $0\coloneqq\tpl{0_V,0_W}$

    * (Associativity): Take $\tpl{v_1,w_1}\tpl{v_2,w_2},\tpl{v_3,w_3}\in V\times W$ and observe that
    $$\begin{equation}
        \begin{aligned}
            \l(\tpl{v_1,w_1}\oplus\tpl{v_2,w_2}\r)\oplus\tpl{v_3,w_3}&=\tpl{v_1+v_2,w_1+w_2}\oplus\tpl{v_3,w_3} && \textrm{Definition of $\oplus$} \\
            &=\tpl{\l(v_1+v_2\r)+v_3,\l(w_1+w_2\r)+w_3} && \textrm{Definition of $\oplus$} \\
            &=\tpl{v_1+\l(v_2+v_3\r),w_1+\l(w_2+w_3\r)} && \textrm{Associativity of $+$} \\
            &=\tpl{v_1,w_1}\oplus\tpl{v_2+v_3,w_2+w_3} && \textrm{Definition of $\oplus$} \\
            &=\tpl{v_1,w_1}\oplus\l(\tpl{v_2,w_2}\oplus\tpl{v_3,w_3}\r). && \textrm{Definition of $\oplus$} \\
        \end{aligned}
    \end{equation}$$

    * (Unit): Take $\tpl{v,w}\in V\times W$ and observe that
    $$\begin{equation}
        \begin{aligned}
            \tpl{v,w}\oplus0&=\tpl{v,w}\oplus\tpl{0_V,0_W} && \textrm{Definition of $0$} \\
            &=\tpl{v+0_V,w+0_W} && \textrm{Definition of $\oplus$} \\
            &=\tpl{v,w}. && \textrm{Unit elements}
        \end{aligned}
    \end{equation}$$
    * (Inverse): Take $\tpl{v,w}$ and set $-\tpl{v,w}\coloneqq\tpl{-v,-w}$. Observe then that
    $$\begin{equation}
        \begin{aligned}
            \tpl{v,w}\oplus\l(-\tpl{v,w}\r)&=\tpl{v,w}\oplus\tpl{-v,-w} \\
            &=\tpl{v+\l(-v\r),w+\l(-w\r)} \\
            &=\tpl{0_V,0_W} \\
            &=0
        \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
        \begin{aligned}
            \l(-\tpl{v,w}\r)\oplus\tpl{v,w}&=\tpl{-v,-w}\oplus\tpl{v,w} && \textrm{Defintion of $-\tpl{v,w}$} \\
            &=\tpl{\l(-v\r)+v,\l(-w\r)+w} && \textrm{Definition of $\oplus$} \\
            &=\tpl{0_V,0_W} && \textrm{Inverse elements} \\
            &=0. && \textrm{Definition of $0$}
        \end{aligned}
    \end{equation}$$
    * (Abelian): Take $\tpl{v_1,w_1},\tpl{v_2,w_2}\in V\times W$ and observe that
    $$\begin{equation}
        \begin{aligned}
            
        \end{aligned}
    \end{equation}$$
