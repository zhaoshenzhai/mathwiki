<br />
<br />

Date Created: 15/01/2022 17:21:16
Categories: #Set_Theory
Status: _Next_

Lemmas: [[Element of set is a subset of its union]], [[Union with another set is monotone w.r.t. subsets]], [[Intersection with another set is monotone w.r.t. subsets]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

For any sets $v$ and $U$, there exists a set $A_1$ whose elements are exactly the sets $v\cup u$ for all $u\in U$. Similarly, there exists a set $A_2$ whose elements are exactly the sets $v\cap u$ for all $u\in U$.

--- admonition

_Proof_. We claim that
$$\begin{equation}
    A_1=\l\{x\in\ms{P}\l(v\cup\bigcup U\r)\mid\l(\ex u\in U\r)\l(x=v\cup u\r)\r\}\ \ \ \ \textrm{and}\ \ \ \ A_2=\l\{x\in\ms{P}\l(v\cap\bigcup U\r)\mid\l(\ex u\in U\r)\l(x=v\cap u\r)\r\}.
\end{equation}$$

To see this, let $u\in U$. Since $u\subseteq\bigcup U$, we have $v\cup u\subseteq v\cup\bigcup U$ and thus $v\cup u\in\ms{P}\l(v\cup\bigcup U\r)$. Therefore the expression for $A_1$ is well-defined. Similarly, $v\cap u\subseteq v\cap\bigcup U$ and thus $v\cap u\in\ms{P}\l(v\cap\bigcup U\r)$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** By the Axiom of Extensionality, the sets $A_1$ and $A_2$ are unique and can thus be denoted by $\l\{v\cup u\mid u\in U\r\}$ and $\l\{v\cap u\mid u\in U\r\}$, respectively.<span style="float:right;">$\blacklozenge$</span>
