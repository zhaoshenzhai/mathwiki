<br />
<br />

Date Created: 24/01/2022 19:03:29
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ be a set and $\ms{T}$ be a non-empty collection of topologies on $X$. Then $\bigcap\ms{T}$ is a topology on $X$.

--- admonition

_Proof_. We verify the axioms for a topology on $X$:
* ($\axitop{1}$): Since $\em$ and $X$ are in $\mc{T}$ for all $\mc{T}\in\ms{T}$, they are in $\bigcap\ms{T}$ too.

Let $\mc{U}\in\bigcap\ms{T}$. We have the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        U\subseteq\bigcap\ms{T}&\Leftrightarrow\fa U\in\mc{U}:U\in\bigcap\ms{T}&&\textrm{Definition of subset}\\
        &\Leftrightarrow\fa U\in\mc{U},\fa\mc{T}\in\ms{T}:U\in\mc{T}&&\textrm{Definition of intersection}\\
        &\Leftrightarrow\fa\mc{T}\in\ms{T},\fa U\in\mc{U}:U\in\mc{T}\ \ \ \ \ \ \ \ &&\textrm{Like quantifiers commute}\\
        &\Leftrightarrow\fa\mc{T}\in\ms{T}:U\subseteq\mc{T}.&&\textrm{Definition of subset}\\
    \end{alignedat}
    \tag{$\ast$}
\end{equation}$$
* ($\axitop{2}$): Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        U\subseteq\bigcap\ms{T}&\Leftrightarrow\fa\mc{T}\in\ms{T}:U\subseteq\mc{T}&&\textrm{Lemma }\l(\ast\r)\\
        &\Rightarrow\fa\mc{T}\in\ms{T}:\bigcup\mc{U}\in\mc{T}\ \ \ \ \ \ \ \ &&\axitop{2}\textrm{ of }\mc{T}\\
        &\Leftrightarrow\bigcup\mc{U}\in\bigcap\ms{T}.&&\ms{T}\neq\em\textrm{; definition of intersection}
    \end{alignedat}
\end{equation}$$
* ($\axitop{3}$): Similarly, observe that (assuming $\mc{U}\neq\em$ is finite)
$$\begin{alignat}{2}
    U\subseteq\bigcap\ms{T}&\Leftrightarrow\fa\mc{T}\in\ms{T}:U\subseteq\mc{T}&&\textrm{Lemma }\l(\ast\r)\\
    &\Rightarrow\fa\mc{T}\in\ms{T}:\bigcap\mc{U}\in\mc{T}\ \ \ \ \ \ \ \ &&\axitop{3}\textrm{ of }\mc{T}\\
    &\Leftrightarrow\bigcap\mc{U}\in\bigcap\ms{T}.&&\ms{T}\neq\em\textrm{; definition of intersection}\qedin
\end{alignat}$$

---

**Remark.** It is generically _not_ the case that $\bigcup\ms{T}$ is a topology on $X$. For a counterexample, consider the set $X=\l\{a,b,c\r\}$ and the topologies
$$\begin{equation}
    \mc{T}_1=\l\{\em,X,\l\{a,b\r\}\r\}\ \ \ \ \textrm{and}\ \ \ \ \mc{T}_2=\l\{\em,X,\l\{b,c\r\}\r\}.
\end{equation}$$
But $\mc{T}_1\cup\mc{T}_2=\l\{\em,X,\l\{a,b\r\},\l\{b,c\r\}\r\}$ is not a topology for $\l\{a,b\r\}\cap\l\{b,c\r\}=\l\{b\r\}\not\in\mc{T}_1\cup\mc{T}_2$.

What went wrong? To prove ($\ast$), one needs to start from
$$\begin{equation}
\fa U\in\mc{U},\ex\mc{T}\in\mathscr{T}:U\in\mc{T}\ \ \ \ \textrm{and\ prove}\ \ \ \ \ex\mc{T}\in\mathscr{T},\fa U\in\mc{U}:U\in\mc{T};
\end{equation}$$
this is only true when the chosen $\mc{T}$ is independent of $U$. But this is not the case, for let $U_1=\{a,b\}$ and $U_2=\{b,c\}$. Looking at what we wish to prove, if we let $\mc{T}=\mc{T}_1$, then $U_2\not\in\mc{T}_1$. Similarly, if we let $\mc{T}=\mc{T}_2$, then $U_1\not\in\mc{T}_2$. Hence the choice of $\mc{T}$ depends on $U$ and we cannot swap the quantifiers.<span style="float:right;">$\blacklozenge$</span>
