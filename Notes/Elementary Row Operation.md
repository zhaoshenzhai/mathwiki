<br />
<br />

Date Created: 23/03/2022 18:10:20
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Row-equivalence of Matrices]]
Generalizations: _Not Applicable_

Properties: [[Elementary row operations have inverses of the same type]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. The **elementary row operations on $m\times n$ matrices over $K$ of types 1, 2, and 3**, respectively, are the functions_
$$\begin{equation}
    e^\l(1\r),e^\l(2\r),e^\l(3\r):\mat{m\times n}{K}\to\mat{m\times n}{K}
\end{equation}$$
_defined by acting on $\v{M}\in\mat{m\times n}{K}$ via:_
* _Multiplying the $s^{th}$ row by a non-zero constant $c\in K$:_
$$\begin{equation}
    e^\l(1\r)\l(\v{M}\r)_{ij}\coloneqq
        \begin{dcases}
            cM_{sj} & \textit{\hspace{0.52in}i\!f\ \,}i=s\\
            M_{ij} & \textit{\hspace{0.52in}else.}
        \end{dcases}
\end{equation}$$
* _Adding a non-zero constant $c\in K$ times the $t^{th}$ row to the $s^{th}$ row:_
$$\begin{equation}
    e^\l(2\r)\l(\v{M}\r)_{ij}\coloneqq
        \begin{dcases}
            M_{sj}+cM_{tj} & \textit{i\!f\ \,}i=s\\
            M_{ij} & \textit{else.}
        \end{dcases}
\end{equation}$$
* _Interchanging the $s^{th}$ and $t^{th}$ rows:_
$$\begin{equation}
        e^\l(3\r)\l(\v{M}\r)_{ij}\coloneqq
            \begin{dcases}
                M_{tj} & \textit{\hspace{0.6in}i\!f\ \,}i=s\\
                M_{sj} & \textit{\hspace{0.6in}i\!f\ \,}i=t\\
                M_{ij} & \textit{\hspace{0.6in}else.}
            \end{dcases}\\
\end{equation}$$

```

**Remark.** If $\v{N}$ is obtained from an elementary row operation on $\v{M}$, write
$$\begin{equation}
    \begin{gathered}
        \v{M}\xrightarrow{cR_s\to R_s}\v{N},\\
        \v{M}\xrightarrow{R_s+cR_t\to R_s}\v{N},\\
        \v{M}\xrightarrow{R_s\leftrightarrow R_t}\v{N}.\\
    \end{gathered}
\end{equation}$$
If the type is not specified, write $\v{M}\xrightarrow{e}\v{N}$.<span style="float:right;">$\blacklozenge$</span>
