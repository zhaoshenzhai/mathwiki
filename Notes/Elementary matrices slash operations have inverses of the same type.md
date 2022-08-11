---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/03/2022 18:38:07
Tags: #Proposition #Closed 

Proved by: [[Elementary operations act as multiplication by its elementary matrix]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then each elementary row operation_
$$\begin{equation}
    e^\l(1\r),e^\l(2\r),e^\l(3\r):\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
_and their corresponding elementary matrices have inverses of the same type. Similarly for elementary column operations._

```

_Proof_. We shall prove the statement for rows; the proof is analogous for columns. For each elementary row operation $e^\l(k\r)$, we need an elementary row operation
$$\begin{equation}
    f^\l(k\r):\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
such that
$$\begin{equation}
    \begin{aligned}
        \l(e^\l(k\r)\circ f^\l(k\r)\r)\l(A\r)_{ij}=a_{ij}=\l(f^\l(k\r)\circ e^\l(k\r)\r)\l(A\r)_{ij}
    \end{aligned}
\end{equation}$$
for all $A\in\bigcup_{j\in\N}\mat{m\times j}{K}$. Once this is done, we claim that $F\coloneqq f^{\l(k\r)}\l(I\r)$ is the inverse of $E$ for all elementary matrices $E\coloneqq e^{\l(k\r)}\l(I\r)$. To this end, we verify that it is both a left and a right inverse thereof.
$$\begin{align}
    FE&=f^{\l(k\r)}\l(E\r) \hspace{1in}EF\hspace{-0.4in}&&=e^{\l(k\r)}\l(F\r) && \textrm{Elementary operations act as multiplication by its elementary matrix} \\
    &=f^{\l(k\r)}\l(e^{\l(k\r)}\l(I\r)\r) &&=e^{\l(k\r)}\l(f^{\l(k\r)}\l(I\r)\r) && \textrm{Substitution} \\
    &=\l(f^{\l(k\r)}\circ e^{\l(k\r)}\r)\l(I\r) &&=\l(e^{\l(k\r)}\circ f^{\l(k\r)}\r)\l(I\r) && \textrm{Definition of composition of functions} \\
    &=I &&=I. && \textrm{Definition of inverse function}
\end{align}$$

* For $e^\l(1\r)$ multiplying the $s^\textrm{th}$ row by a non-zero constant $c\in K$, consider the elementary row operation $f^\l(1\r)$ defined by
$$\begin{equation}
    f^\l(1\r)\l(A\r)_{ij}\coloneqq
        \begin{dcases}
            \frac{1}{c}a_{sj} & \textrm{if }i=s\\[0.05in]
            a_{ij} & \textrm{else.}
        \end{dcases}
\end{equation}$$
and observe that
$$\begin{equation}
    \begin{aligned}
        \l(e^\l(1\r)\circ f^\l(1\r)\r)\l(A\r)_{ij}&=e^\l(1\r)\l(f^\l(1\r)\l(A\r)\r)_{ij}\\
        &=
            \begin{dcases}
                c\l(\frac{1}{c}a_{sj}\r) & \textrm{if }i=s\\
                a_{ij} & \textrm{else}
            \end{dcases}\\[0.1in]
        &=
            \begin{dcases}
                a_{sj} & \hspace{0.6in}\textrm{if }i=s\\
                a_{ij} & \hspace{0.6in}\textrm{else}
            \end{dcases}\\[0.1in]
        &=a_{ij}
    \end{aligned}\ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(f^\l(1\r)\circ e^\l(1\r)\r)\l(A\r)_{ij}&=f^\l(1\r)\l(e^\l(1\r)\l(A\r)\r)_{ij}\\
        &=
            \begin{dcases}
                \frac{1}{c}\l(ca_{sj}\r) & \textrm{if }i=s\\[0.05in]
                a_{ij} & \textrm{else}
            \end{dcases}\\[0.1in]
        &=
            \begin{dcases}
                a_{sj} & \hspace{0.43in}\textrm{if }i=s\\
                a_{ij} & \hspace{0.43in}\textrm{else}
            \end{dcases}\\[0.1in]
        &=a_{ij}.
    \end{aligned}
\end{equation}$$
* For $e^\l(2\r)$ adding a non-zero constant $c\in K$ times the $t^\textrm{th}$ row to the $s^\textrm{th}$ row, consider the elementary row operation $f^\l(2\r)$ defined by
$$\begin{equation}
    f^\l(2\r)\l(A\r)_{ij}\coloneqq
        \begin{dcases}
            a_{sj}-ca_{tj} & \textrm{if }i=s\\
            a_{ij} & \textrm{else.}
        \end{dcases}
\end{equation}$$
and observe that
$$\begin{equation}
    \begin{aligned}
        \l(e^\l(2\r)\circ f^\l(2\r)\r)\l(A\r)_{ij}&=e^\l(2\r)\l(f^\l(2\r)\l(A\r)\r)_{ij}\\
        &=
            \begin{dcases}
                \l(a_{sj}-ca_{tj}\r)+ca_{tj} & \textrm{\hspace{0.17in}if }i=s\\
                a_{ij} & \textrm{\hspace{0.17in}else}
            \end{dcases}\\[0.1in]
        &=
            \begin{dcases}
                a_{sj} & \hspace{1.37in}\textrm{if }i=s\\
                a_{ij} & \hspace{1.37in}\textrm{else}
            \end{dcases}\\[0.1in]
        &=a_{ij}
    \end{aligned}\ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(f^\l(2\r)\circ e^\l(2\r)\r)\l(A\r)_{ij}&=f^\l(2\r)\l(e^\l(2\r)\l(A\r)\r)_{ij}\\
        &=
            \begin{dcases}
                \l(a_{sj}+ca_{tj}\r)-ca_{tj} & \textrm{\hspace{0.17in}if }i=s\\
                a_{ij} & \textrm{\hspace{0.17in}else}
            \end{dcases}\\[0.1in]
        &=
            \begin{dcases}
                a_{sj} & \hspace{1.37in}\textrm{if }i=s\\
                a_{ij} & \hspace{1.37in}\textrm{else}
            \end{dcases}\\[0.1in]
        &=a_{ij}.
    \end{aligned}
\end{equation}$$
* For $e^\l(3\r)$ interchanging the $s^\textrm{th}$ and $t^\textrm{th}$ rows, consider $f^\l(3\r)\coloneqq e^\l(3\r)$ and observe that

$\begin{align}
    \l(e^\l(3\r)\circ f^\l(3\r)\r)\l(A\r)_{ij}&=e^\l(3\r)\l(f^\l(3\r)\l(A\r)\r)_{ij}\\
    &=
        \begin{dcases}
            a_{sj} & \textrm{if }i=s\\
            a_{tj} & \textrm{if }i=t\\
            a_{ij} & \textrm{else}
        \end{dcases}\\[0.1in]
    &=a_{ij}.\qedin
\end{align}$
