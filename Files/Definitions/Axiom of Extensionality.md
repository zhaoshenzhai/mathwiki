<br />
<br />

Date Created: 16/01/2022 10:57:06
Categories: #Set_Theory
Status: _Open_

Constructions: [[ZFC Set Theory]]

!!! ad-Axiom Axiom (Extensionality).

Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. The **Axiom of Extensionality** is the universal closure of the $\mc{L}$-formula
$$\begin{equation}
    \fa z\l(z\in x\Leftrightarrow z\in y\r)\Rightarrow x=y.
\end{equation}$$

--- admonition

> Informally, the truth of this axiom is clear if we recall that the intended universe of set theory consists of all _hereditary sets_. That is, if $x$ is in our universe, then $x$ is a set and all members of $x$ are also in our universe and hence also sets. Then $\fa z\l(z\in x\Leftrightarrow z\in y\r)$ says that $x,y$ are sets with exactly the same members, so they must be the same set.
<span style="float:right;">- Kenneth Kunan; Set Theory, I.4</span>
