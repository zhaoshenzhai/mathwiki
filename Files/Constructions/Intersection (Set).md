<br />
<br />

Date Created: 14/01/2022 15:43:46
Categories: #Set_Theory

Types: _Not Applicable_
Examples: _Not Applicable_ 
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

For any non-empty set $u$, there exists a unique set $A$ whose elements belong to every element of $u$:
    $$\begin{equation}
        \fa u\ex A\fa x\l[x\in A\Leftrightarrow\l(\fa a\in u\r)x\in a\r].
    \end{equation}$$

--- admonition

_Proof._ Since $u$ is non-empty, let $B\in u$. By the Axiom Schema of Specification with
    $$\begin{equation}
        \phi:\l(\l(\fa a\in u\r)x\in a\r),
    \end{equation}$$
we have
    $$\begin{equation}
        \fa u\ex A\fa x\l[x\in A\Leftrightarrow\l(x\in B\land\l(\fa a\in u\r)x\in a\r)\r].
    \end{equation}$$
Since $x\in a$ for all $a\in u$, and $B\in u$, we see that $x\in B$. Thus we can simplify this statement into
    $$\begin{equation}
        \fa u\ex A\fa x\l[x\in A\Leftrightarrow\l(\fa a\in u\r)x\in a\r].\qedin
    \end{equation}$$
    
---

**Remark.** By the Axiom of Extensionality, the set $A$ is unique and can thus be denoted by $\bigcap u$. If $u$ and $v$ are sets, define the **intersection of $u$ and $v$** as the set $\bigcup\l\{u,v\r\}$.
