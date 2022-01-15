<br />
<br />

Date Created: 14/01/2022 14:33:24
Categories: #Set_Theory 
Status: _Open_

Types: _Not Applicable_
Examples: _Not Applicable_
Properties: [[No set of all sets]]
Constructions: [[Subset]], [[Empty Set]], [[Singleton]], [[Union]], [[Power Set]], [[Tuple (Kuratowski)]], [[Natural Numbers]], [[Category of Sets]]
Generalizations: _Not Applicable_

!!! ad-Axiom Axiom (Zermelo-Fraenkel with Choice).

Consider the language $\mc{L}$ with equality and a fundamental predicate of two variables $\in$.
* (Axiom of Extensionality): If two sets $u$ and $v$ have the same elements, then they are equal:
$$\begin{equation}
    \fa u\fa v\l[\fa x\l(x\in u\Leftrightarrow x\in v\r)\Rightarrow u=v\r].
\end{equation}$$
* (Axiom of Empty Set): There exists a set with no elements:
$$\begin{equation}
    \ex A\fa x\l(x\not\in A\r).
\end{equation}$$
* (Axiom of Pairing): For any sets $u$ and $v$, there is a set $A$ having as elements just $u$ and $v$:
$$\begin{equation}
    \fa u\fa v\ex A\fa x\l[x\in A\Leftrightarrow\l(x=u\lor x=v\r)\r].
\end{equation}$$
* (Axiom Schema of Specification): For every set $B$ and formula $\phi$ with free variables $u_1,\dots,u_k$, $B$, and $x$, there is a set $A$ whose elements are exactly the elements of $B$ that satisfy $\phi$:
$$\begin{equation}
    \fa u_1,\dots,u_k\fa B\ex A\fa x\l[x\in A\Leftrightarrow\l(x\in B\land\phi\r)\r].
\end{equation}$$
* (Axiom of Union): For any set $u$, there exists a set $A$ whose elements are exactly the elements are exactly the elements of the elements of $u$:
$$\begin{equation}
    \fa u\ex A\fa x\l[x\in A\Leftrightarrow\l(\ex v\in u\r)x\in v\r].
\end{equation}$$
* (Axiom of Power Set): For any set $u$, there exists a set $A$ whose elements are exactly the subsets of $u$:
$$\begin{equation}
    \fa u\ex A\fa x\l[x\in A\Leftrightarrow\l(\fa y\l(y\in x\Rightarrow y\in u\r)\r)\r].
\end{equation}$$
* (Axiom of Infinity): There exists an inductive set:
$$\begin{equation}
    \ex A\l[\em\in A\land\l(\fa a\in A\r)\l(a^+\in A\r)\r].
\end{equation}$$

--- admonition

**Remark.** We can quantify $\textrm{`}$within sets$\textrm{'}$:
* $\l(\ex u\in v\r)\phi\,\colon\!\Leftrightarrow\ex u\l(u\in v\land\phi\r)$ and
* $\l(\fa u\in v\r)\phi\,\colon\!\Leftrightarrow\fa u\l(u\in v\Rightarrow\phi\r)$.

This allows us to write the subset relation as $\l(\fa x\in u\r)x\in v$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** By the Axiom of Extensionality, the
* empty set is unique and is denoted by $\em$, the
* pair set of the sets $u$ and $v$ is unique and is denoted by $\l\{u,v\r\}$, the
* union of a set $u$ is unique and is denoted by $\bigcup u$, and the
* power set of $u$ is unique and is denoted by $\ms{P}u$.

The same is true for any set $\textrm{`}$constructed$\textrm{'}$ from the Axiom Schema of Specification.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** In the Axiom Schema of specification, the set $A$ is always a subset of $B$. By the Axiom of Extensionality, the set $A$ is unique so we can write it as the expression $A=\l\{x\in B\mid\phi\r\}$, called the **set-builder notation**.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.**
* Let $u$ be a set. Write the pair set of $u$ with itself as $\l\{u\r\}\coloneqq\l\{u,u\r\}$.
* Let $u$ and $v$ be sets. By the Axiom of Pairing, $\l\{u,v\r\}$ is a set. The **union of $u$ and $v$** is defined as $u\cup v\coloneqq\bigcup\l\{u,v\r\}$.<span style="float:right;">$\blacklozenge$</span>
