<br />
<br />

Date Created: 14/01/2022 15:01:47
Categories: #Set_Theory

!!! ad-Proposition Proposition (Russel's Paradox).

There does not exist a [[Axioms of Set Theory|set]] $\ms{U}$ such that $u\in\ms{U}$ for all sets $u$.

--- admonition

_Proof._ Suppose, for contradiction, that such a set $\ms{U}$ exists. By the [[Axioms of Set Theory|Axiom Schema of Specification]], the following is an axiom:
    $$\begin{equation}
        \ex u\fa x\l[x\in u\Leftrightarrow\l(x\in\ms{U}\land x\not\in x\r)\r].
    \end{equation}$$
In particular, this holds for the set $u$ itself, so $u\in u\Leftrightarrow\l(u\in\ms{U}\land u\not\in u\r)$. Since $\ms{U}$ contains all sets, and $u$ is a set, we have $u\in\ms{U}$. Thus $u\in u\Leftrightarrow u\not\in u$, so we arrive at a contradiction.
    $$\begin{equation}
        \qedin
    \end{equation}$$
