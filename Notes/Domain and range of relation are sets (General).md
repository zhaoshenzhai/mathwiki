<div class="topSpace"></div>

Date Created: 21/01/2022 16:18:54
Tags: #Proposition #Later/Set_Theory

Proved by: [[Replacement image of a set is a set]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

**Remark.** Let $x$ and $y$ be sets and let $\l[\!\l[x,y\r]\!\r]$ be any set such that if $\l[\!\l[x,y\r]\!\r]=\l[\!\l[u,v\r]\!\r]$, then $x=u$ and $v=y$; this captures the essence of what it means for $\l[\!\l[\cdot,\cdot\r]\!\r]$ to be an $\textrm{`}$ordered pair$\textrm{'}$. A set $R$ is then a $\textrm{`}$binary relation$\textrm{'}$ if
$$\begin{equation}
    \fa u\in R:\ex x,y:u=\l[\!\l[x,y\r]\!\r].
\end{equation}$$
All properties of $R$ that do not depend on the specific Kuratowski definition of the ordered pair are, of course, carried forward.<span style="float:right;">$\blacklozenge$</span> 

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation. Then there exists a unique set $z_1$ whose elements are exactly the sets $x$ for which there exists some $y$ such that $xRy$. Similarly, there exists a unique set $z_2$ whose elements are exactly the sets $y$ for which there exists some $x$ such that $xRy$. Formally,_
$$\begin{equation}
    \begin{gathered}
        \fa R\ex!z_1\fa x\l(x\in z_1\Leftrightarrow\ex y:xRy\r)\\
        \fa R\ex!z_2\fa y\l(y\in z_2\Leftrightarrow\ex x:xRy\r).
    \end{gathered}
\end{equation}$$

```

_Proof_. We shall prove the statement for $z_1$; the proof for $z_2$ is analogous. Firstly, observe that
$$\begin{equation}
    \begin{aligned}
        \ex y:xRy&\Leftrightarrow\ex y:\l[\!\l[x,y\r]\!\r]\in R&&\textrm{Notation}\\
        &\Leftrightarrow\ex y,\ex u\in R:u=\l[\!\l[x,y\r]\!\r]\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
        &\Leftrightarrow\ex u\in R,\ex y:u=\l[\!\l[x,y\r]\!\r].&&\textrm{Like quantifiers commute}
    \end{aligned}
\end{equation}$$
Let $\phi\l(u,x\r)\,\colon\!\Leftrightarrow\ex y:u=\l[\!\l[x,y\r]\!\r]$; we wish to show that $\fa u\in R,\ex!x\phi\l(u,x\r)$. To this end, fix $u\in R$ and suppose that there exist sets $x$ and $x'$ such that $\phi\l(u,x\r)$ and $\phi\l(u,x'\r)$. Hence there exist $y$ and $y'$ such that $\l[\!\l[x,y\r]\!\r]=u=\l[\!\l[x',y'\r]\!\r]$. It follows that $x=x'$ and hence we can form the replacement image of $R$ under $\phi\l(u,x\r)$ as the set
$$\begin{equation}
    \dom R\coloneqq\l\{x\mid\ex u\in R,\ex y:u=\l[\!\l[x,y\r]\!\r]\r\}=\l\{x\mid\ex y:xRy\r\}.\qedin
\end{equation}$$
