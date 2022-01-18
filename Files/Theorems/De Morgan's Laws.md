<br />
<br />

Date Created: 18/01/2022 16:48:35
Status: #In_Progress

Lemmas: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Theorem Theorem.

Let $v$ and $U$ be sets with $U\neq\em$. Then
$$\begin{equation}
    v\comp\bigcup U=\bigcap\l\{v\comp u\mid u\in U\r\}\ \ \ \ \textrm{and}\ \ \ \ v\comp\bigcap U=\bigcup\l\{v\comp u\mid u\in U\r\}.
\end{equation}$$

--- admonition

_Proof_. Take $x\in v\comp\bigcup U$. The first result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        x\in v\comp\bigcup U&\Leftrightarrow x\in v\land x\not\in\bigcup U&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow x\in v\land\lnot\l(x\in\bigcup U\r)&&\textrm{Definition of }\not\in\\
        &\Leftrightarrow x\in v\land\lnot\l[\l(\ex u\in U\r)x\in u\r]&&\textrm{Definition of union}\\
        &\Leftrightarrow x\in v\land\l(\fa u\in U\r)x\not\in u&&\textrm{Negation of quantifier}\\
        &\Leftrightarrow\l(\fa u\in U\r)\l(x\in v\land x\not\in u\r)&&u\textrm{ is not free in }x\in v\\
        &\Leftrightarrow\l(\fa u\in U\r)x\in v\comp u&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow\l(\fa y\in\l\{v\comp u\mid u\in U\r\}\r)x\in y\ \ \ \ \ \ \ \ &&\textrm{TODO}\\
        &\Leftrightarrow x\in\bigcap\l\{v\comp u\mid u\in U\r\}.&&U\neq\em\textrm{; definition of intersection}
    \end{alignedat}
\end{equation}$$
The last equivalence requires that $U\neq\em$, which ensures that $\l\{v\setminus u\mid u\in U\r\}=\l\{x\mid\l(\ex u\in U\r)x=v\comp u\r\}$ is nonempty for the intersection to be defined.
> Informally, take $x\in v\comp\bigcup U$, so $x\in v$ and $x\not\in u$ for all $u\in U$. Thus $x\not\in v\comp u$ for all $u\in U$ and hence $x\in\bigcap\l\{v\comp u\mid u\in U\r\}$. Conversely, take $x\in\bigcap\l\{v\comp u\mid u\in U\r\}$, so $x\in v\comp u$ for all $u\in U$. It follows that $x\in v$ and $x\not\in u$ for all $u\in U$, so the result follows.

Now take $x\in v\comp\bigcap U$. The second result follows from the following chain of equivalences:
