<div class="topSpace"></div>

Date Created: 27/10/2022 20:59:39
Tags: #Proposition #Courses/MATH235

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G_1,\ast_1,e_1}$ and $\tpl{G_2,\ast_2,e_2}$ be groups and consider a homomorphism $\phi:G_1\to G_2$. Then the following properties hold._
* _(Preserves identity): $\phi\l(e_1\r)=e_2$._
* _(Preserve inverses): $\fa g\in G_1:\l[\phi\l(g\r)\r]^{-1}=\phi\l(g^{-1}\r)$._

```

_Proof_. Simply compute
$$\begin{equation}
    \begin{gathered}
        e_2\ast_2\phi\l(e_1\r)=\phi\l(e_1\r)=\phi\l(e_1\ast_1e_1\r)=\phi\l(e_1\r)\ast_2\phi\l(e_1\r)\\
        \phi\l(g\r)\ast_2\phi\l(g\r)^{-1}\!=e_2\!=\phi\l(e_1\r)=\phi\l(g\ast_1g^{-1}\r)=\phi\l(g\r)\ast_2\phi\l(g^{-1}\r)
    \end{gathered}
\end{equation}$$
and observe that the results follow from cancellation.<span style="float:right;">$\blacksquare$</span>
