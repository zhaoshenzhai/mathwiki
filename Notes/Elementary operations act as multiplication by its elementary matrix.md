<div class="topSpace"></div>

Date Created: 07/04/2022 05:21:34
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Consider any elementary row operation_ $e:\bigcup_{j\in\N^\ast}\mat{m\times j}{K}\to\bigcup_{j\in\N^\ast}\mat{m\times j}{K}$ _and set $E\coloneqq e\l(I_m\r)$. Then, for all $A\in\mat{m\times n}{K}$, we have that_
$$\begin{equation}
    e\l(A\r)=EA.
\end{equation}$$
_Similarly, if $e$ is an elementary column operation on matrices with $n$ columns, then $e\l(A\r)=AE$._

```

_Proof_. We shall prove the statement for rows; the proof is analogous for columns. We wish to show that
$$\begin{equation}
    e\l(A\r)_{ik}=\sum_{j=1}^me_{ij}a_{jk}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$. There are three types of elementary row operations, so we shall consider them separately.
* For $e=e^{\l(1\r)}$ multiplying the $s^\textrm{th}$ row by a non-zero constant $c\in K$, we have that
$$\begin{equation}
    e_{ij}=e\l(I_m\r)_{ij}=
        \begin{dcases}
            c\delta_{sj} & \textrm{if }i=s\\
            \delta_{ij} & \textrm{else.}
        \end{dcases}
\end{equation}$$
It follows then that
$$\begin{equation}
    \begin{aligned}
        \sum_{j=1}^me_{ij}a_{jk}&=
            \begin{dcases}
                \sum_{j=1}^mc\delta_{sj}a_{jk} & \textrm{if }i=s\\
                \sum_{j=1}^m\delta_{ij}a_{jk} & \textrm{else}
            \end{dcases} \\
        &=
            \begin{dcases}
                ca_{sk} & \textrm{\hspace{0.53in}if }i=s\\
                a_{ik} & \textrm{\hspace{0.53in}else}
            \end{dcases} \\
        &=e\l(A\r)_{ik}.
    \end{aligned}
\end{equation}$$
* For $e=e^{\l(2\r)}$ adding a non-zero constant $c\in K$ times the $t^\textrm{th}$ row to the $s^\textrm{th}$ row, we have that
$$\begin{equation}
    e_{ij}=e\l(I_m\r)_{ij}=
        \begin{dcases}
            \delta_{sj}+c\delta_{tj} & \textrm{if }i=s\\
            \delta_{ij} & \textrm{else.}
        \end{dcases}
\end{equation}$$
It follows then that
$$\begin{equation}
    \begin{aligned}
        \sum_{j=1}^me_{ij}a_{jk}&=
            \begin{dcases}
                \sum_{j=1}^m\l(\delta_{sj}+c\delta_{tj}\r)a_{jk} & \textrm{if }i=s\\
                \sum_{j=1}^m\delta_{ij}a_{jk} & \textrm{else}
            \end{dcases} \\
        &=
            \begin{dcases}
                a_{sk}+ca_{tk} & \textrm{\hspace{0.64in}if }i=s\\
                a_{ik} & \textrm{\hspace{0.64in}else}
            \end{dcases} \\
        &=e\l(A\r)_{ik}.
    \end{aligned}
\end{equation}$$
* For $e=e^{\l(3\r)}$ interchanging the $s^\textrm{th}$ and $t^\textrm{th}$ rows , we have that
$$\begin{equation}
    e_{ij}=e\l(I_m\r)_{ij}=
        \begin{dcases}
            \delta_{tj} & \textrm{if }i=s\\
            \delta_{sj} & \textrm{if }i=t\\
            \delta_{ij} & \textrm{else.}
        \end{dcases}
\end{equation}$$
It follows then that
$$\begin{align}
    \sum_{j=1}^me_{ij}a_{jk}&=
        \begin{dcases}
            \sum_{j=1}^m\delta_{tj}a_{jk} & \textrm{if }i=s\\
            \sum_{j=1}^m\delta_{sj}a_{jk} & \textrm{if }i=t\\
            \sum_{j=1}^m\delta_{ij}a_{jk} & \textrm{else}
        \end{dcases} \\
    &=
        \begin{dcases}
            a_{tk} & \textrm{\hspace{0.5in}if }i=s\\
            a_{sk} & \textrm{\hspace{0.5in}if }i=t\\
            a_{ik} & \textrm{\hspace{0.5in}else}
        \end{dcases} \\
    &=e\l(A\r)_{ik}.\qedin
\end{align}$$
