<div class="topSpace"></div>

Date Created: 15/11/2022 14:07:45
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Basic properties of group homomorphisms]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R_1$ and $R_2$ be rings and consider a homomorphism $\phi:R_1\to R_2$. Let $S_1\subringeq R_1$ and $S_2\subringeq R_2$ be subrings. Then the following properties hold.
* (Image preserve subrings): $\phi\l(S_1\r)\subringeq R_2$ is a subring. Furthermore, if $S_1$ is commutative, then so is $\phi\l(S_1\r)$.
* (Image preserve field): If $S_1$ is a field, then $\phi\l(S_1\r)$ is either $\l\{0\r\}$ or a field.
* (Preimage preserve subrings): $\phi^{-1}\!\l(S_2\r)\subringeq R_1$ is a subring.
* (Preimage preserve ideals): If $S_2\idealeq R_2$ is an ideal, then $\phi^{-1}\!\l(S_2\r)\idealeq R_1$ is an ideal.

Furthermore, if $\mf{a}_2\ideal R_2$ and $\mf{a}_1\coloneqq\phi^{-1}\!\l(\mf{a}_2\r)\ideal R_1$, then $\phi$ induces an injective homomorphism $\widetilde{\phi}:R_1/\mf{a}_1\to R_2/\mf{a}_2$.
* If $\mf{a}_2$ is prime, then so is $\mf{a}_1$.
* If $\mf{a}_2$ is maximal and $\phi$ is surjective, then so is $\mf{a}_1$.

```

<b>Remark.</b> In particular, $\im\phi\subringeq R_2$ and $\ker\phi\subringeq R_1$ are subrings, and that $\ker\phi$ is an ideal in $R_1$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* Take $r_2,r_2'\in\phi\l(S_1\r)$, so there exist $r_1,r_1'\in S_1$ such that $r_2=\phi\l(r_1\r)$ and $r_2'=\phi\l(r_1'\r)$. Thus $r_2r_2'=\phi\l(r_1\r)\phi\l(r_1'\r)=\phi\l(r_1r_1'\r)\in\phi\l(S_1\r)$. Furthermore, we have
$$\begin{equation}
    r_2r_2'=\phi\l(r_1\r)\phi\l(r_1'\r)=\phi\l(r_1r_1'\r)=\phi\l(r_1'r_1\r)=\phi\l(r_1'\r)\phi\l(r_1\r)=r_2'r_2.
\end{equation}$$
* Observe that $\phi\l(S_1\r)$ is a commutative ring. Take some non-zero $\phi\l(r\r)\in\phi\l(S_1\r)$. Then $r\neq0$, so it has an inverse $r^{-1}\in S_1$; we claim that $\phi\l(r\r)^{-1}=\phi\l(r^{-1}\r)$. Indeed, since $\phi\l(S_1\r)$ is a commutative ring, the computation $\phi\l(r^{-1}\r)\phi\l(r\r)=\phi\l(r^{-1}r\r)=\phi\l(1\r)$ suffices.
* Take $r_1,r_1'\in\phi^{-1}\!\l(S_2\r)$, so $\phi\l(r_1\r)\in S_2$ and $\phi\l(r_1'\r)\in S_2$ and hence $\phi\l(r_1r_1'\r)=\phi\l(r_1\r)\phi\l(r_1'\r)\in S_2$. Furthermore, $\phi^{-1}\!\l(1\r)=1$.
* Take $s\in\phi^{-1}\!\l(S_2\r)$ and $r\in R_1$, so $\phi\l(s\r)\in S_2$ and hence $r_2\phi\l(s\r),\phi\l(s\r)r_2\in S_2$ for all $r_2\in R_2$. It suffices to show that $rs,sr\in\phi^{-1}\!\l(S_2\r)$. Indeed, observe that
$$\begin{equation}
    \phi\l(rs\r)=\phi\l(r\r)\phi\l(s\r)\in S_2\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \phi\l(sr\r)=\phi\l(s\r)\phi\l(r\r)\in S_2.
\end{equation}$$

For the induced homomorphism, let $\widetilde{\phi}\l(r+\mf{a}_1\r)\coloneqq\phi\l(r\r)+\mf{a}_2$, which is well-defined since if $r_1+\mf{a}_1=r_2+\mf{a}_1$, then $r_1-r_2\in\mf{a}_1$ and hence $\phi\l(r_1\r)-\phi\l(r_2\r)\in\mf{a}_2$. It is also injective since if $\widetilde{\phi}\l(r_1+\mf{a}_1\r)=\widetilde{\phi}\l(r_2+\mf{a}_1\r)$, then $\phi\l(r_1\r)+\mf{a}_2=\phi\l(r_2\r)+\mf{a}_2$ and hence $\phi\l(r_1-r_2\r)\in\mf{a}_2$. Thus $r_1-r_2\in\mf{a}_1$, as desired.
* Let $x,y\in R_1$ be such that $xy\in\mf{a}_1$. Then $\phi\l(x\r)\phi\l(y\r)\in\mf{a}_2$, so either $\phi\l(x\r)\in\mf{a}_2$ or $\phi\l(y\r)\in\mf{a}_2$. Thus either $x\in\mf{a}_1$ or $y\in\mf{a}_1$, as desired.
* If $\mf{b}_1\idealeq R_1$ is an ideal properly containing $\mf{a}_1$, then $\mf{b}_2\coloneqq\phi\l(\mf{b}_1\r)\idealeq\phi\l(R_1\r)=R_2$ is an ideal properly containing $\mf{a}_2$. But $\mf{a}_2$ is maximal, which forces $\mf{b}_2=R_2$ and hence $\mf{b}_1=\phi^{-1}\!\l(\mf{b}_2\r)=R_1$, as desired.<span style="float:right;">$\blacksquare$</span>
