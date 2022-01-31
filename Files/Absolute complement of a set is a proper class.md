<br />
<br />

Date Created: 18/01/2022 13:30:01
Tags: #Proposition #Open

Proved by: [[Universal set is a proper class]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $u$ be a set. The expression $\operatorname{comp}\l(u\r)\coloneqq\l\{x\mid x\not\in u\r\}$ is a proper class.

--- admonition

_Proof_. Suppose, for sake of contradiction, that $\operatorname{comp}\l(u\r)$ is a set and thus $u\cup\operatorname{comp}\l(u\r)$ is also a set. Take any set $x$; we claim that $x\in u\cup\operatorname{comp}\l(u\r)$, so the union is in fact the $\textrm{`}$set of all sets$\textrm{'}$, which contradicts the fact that it does not exist. This claim can be seen by the equivalences
$$\begin{equation}
    \begin{alignedat}{2}
        x\in u\cup\operatorname{comp}\l(u\r)&\Leftrightarrow x\in u\lor x\in\operatorname{comp}\l(u\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of union}\\
        &\Leftrightarrow x\in u\lor x\not\in u,&&\textrm{Definition of absolute complement}
    \end{alignedat}
\end{equation}$$
where the last formula is always true, independently from $x$.<span style="float:right;">$\blacksquare$</span>
