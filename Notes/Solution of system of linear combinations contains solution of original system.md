<br />
<br />

Date Created: 22/03/2022 17:38:42
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider the linear system_
$$\begin{equation}
    \phi_1\l(x_1,\dots,x_n\r)\,\colon\!\Leftrightarrow\l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. Fix_ $c_{i1},\dots,c_{im}\in K$ _for all $i\in\l\{1,\dots,m\r\}$ and consider the linear system_
$$\begin{equation}
    \phi_2\l(x_1,\dots,x_n\r)\,\colon\!\Leftrightarrow\l\{\begin{alignedat}{7}
        \l(c_{11}a_{11}+\cdots+c_{1m}a_{m1}\r)&x_1&&\,+\,&&\,\cdots\,&&\,+\,\,\,\,\l(c_{11}a_{1n}+\cdots+c_{1m}a_{mn}\r)&&x_n&&=\,\,c_{11}b_1+\cdots+c_{1m}&&b_m\\
        \vdots\hspace{1.01in}&&&&&&&\hspace{1.25in}\vdots&&&&\hspace{1.02in}\vdots\\
        \l(c_{m1}a_{11}+\cdots+c_{mm}a_{m1}\r)&x_1&&\,+\,&&\,\cdots\,&&\,+\,\l(c_{m1}a_{1n}+\cdots+c_{mm}a_{mn}\r)&&x_n&&=c_{m1}b_1+\cdots+c_{mm}&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of $m$ linear combinations thereof. Then $\fa s_1,\dots,s_n:\phi_1\l(s_1,\dots,s_n\r)\Rightarrow\phi_2\l(s_1,\dots,s_n\r)$; that is, all solutions of the original system are solutions of the system of its linear combinations._

```

_Proof_. Take $s_1,\dots,x_n\in K$ such that $\phi_1\l(s_1,\dots,s_n\r)$. Then, for all $i\in\l\{1,\dots,m\r\}$, $\l\langle s_1,\dots,s_n\r\rangle$ is a solution of
$$\begin{equation}
    c_{i1}\l(a_{11}x_1+\cdots+a_{1n}x_n\r)+\cdots+c_{im}\l(a_{m1}x_1+\cdots+a_{mn}x_n\r)=c_{i1}b_1+\cdots+c_{im}b_m.
\end{equation}$$
Rearranging by grouping all the $x_j\textrm{'}$s together, we see that $\l\langle s_1,\dots,s_n\r\rangle$ is also a solution of
$$\begin{equation}
    \l(c_{i1}a_{11}+\cdots+c_{im}a_{m1}\r)x_1+\cdots+\l(c_{i1}a_{1n}+\cdots+c_{im}a_{mn}\r)x_n=c_{i1}b_1+\cdots+c_{im}b_m.
\end{equation}$$
This holds for all $i\in\l\{1,\dots,m\r\}$, so $\l\langle s_1,\dots,s_n\r\rangle$ is a solution of $\phi_2\l(x_2,\dots,x_n\r)$ and thus $\phi_2\l(s_1,\dots,s_n\r)$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The converse does not necessarily hold. Consider, for instance, the linear system
$$\begin{equation}
    \phi_1\l(x_1,x_2,x_3\r)\,\colon\!\Leftrightarrow\l\{
        \begin{alignedat}{5}
            &\hspace{0.2in}x_2&&\,+\,3&&x_3&&=0\\
            x_1&&&\,-\,&&x_3&&=0\\
            x_1&&&\,+\,&&x_3&&=0.
        \end{alignedat}\r.
\end{equation}$$
For the second and third equations to be satisfied, we must have $x_1=0$ (since $x_1=-x_1$) and hence $x_3=0$ too. Hence, from the first equation, we see that $x_2=0$. Thus $\l\langle0,0,0\r\rangle$ is the only solution of $\phi_1\l(x_1,x_2,x_3\r)$.

Consider now the linear system
$$\begin{equation}
    \phi_2\l(x_1,x_2,x_3\r)\,\colon\!\Leftrightarrow\l\{
        \begin{alignedat}{6}
            &x_1&&\,+\,2&&x_2&&\,+\,5&&x_3&&=0\\
            &x_1&&\,+\,3&&x_2&&\,+\,8&&x_3&&=0\\
            -&x_1&&\,+\,&&x_2&&\,+\,4&&x_3&&=0
        \end{alignedat}
    \r.
\end{equation}$$
of linear combinations of $\phi_1\l(x_1,x_2,x_3\r)$ given by
$$\begin{equation}
    \begin{alignedat}{3}
        c_{11}&=2\hspace{0.5in}c_{12}&&=1\hspace{0.5in}c_{13}&&=0\\
        c_{21}&=3\hspace{0.5in}c_{22}&&=1\hspace{0.5in}c_{23}&&=0\\
        c_{31}&=3\hspace{0.5in}c_{32}&&=-1\hspace{0.36in}c_{33}&&=0.
    \end{alignedat}
\end{equation}$$
Observe that $\l\langle s,-3s,s\r\rangle$ is a solution of $\phi_2\l(x_1,x_2,x_3\r)$ for any $s\in K$; in particular, we have $\phi_2\l(1,-3,1\r)$ but not $\phi_1\l(1,-3,1\r)$.<span style="float:right;">$\blacklozenge$</span>
