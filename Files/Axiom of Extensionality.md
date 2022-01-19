<br />
<br />

Date Created: 16/01/2022 10:57:06
Tags: #Axiom #Open

Requires: _Not Applicable_

Constructions: [[ZFC Set Theory]]

!!! ad-Axiom Axiom (Extensionality).

Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. The **Axiom of Extensionality** is the $\mc{L}$-formula
$$\begin{equation}
    \fa x\fa y\l[\fa z\l(z\in x\Leftrightarrow z\in y\r)\Rightarrow x=y\r].
\end{equation}$$

--- admonition

> Informally, the truth of this axiom is clear if we recall that the intended universe of set theory consists of all _hereditary sets_. That is, if $x$ is in our universe, then $x$ is a set and all members of $x$ are also in our universe and hence also sets. Then $\fa z\l(z\in x\Leftrightarrow z\in y\r)$ says that $x,y$ are sets with exactly the same members, so they must be the same set.
<span style="float:right;">- Kenneth Kunan; Set Theory, I.4</span>

---

**Remark.** We can quantify $\textrm{`}$within sets$\textrm{'}$, that is, for any set $u$ and formula $\phi\l(x\r)$, write
* $\l(\fa x\in u\r)\phi\l(x\r)$ for the formula $\fa x\l[x\in u\Rightarrow\phi\l(x\r)\r]$, and write
* $\l(\ex x\in u\r)\phi\l(x\r)$ for the formula $\ex x\l[x\in u\land\phi\l(x\r)\r]$.<span style="float:right;">$\blacklozenge$</span>
