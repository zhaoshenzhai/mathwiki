<div class="topSpace"></div>

Date Created: 20/07/2023 10:44:57
Tags: #Type/Theorem #Topic/Rings_and_Modules/Module_Theory

Proved by: [[Basis Extension Theorem]], [[Free Module#^universal-property-of-free-modules]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Freedom Theorem).

Let $F$ be a finitely-generated free $R$-module over a PID $R$, say with $F\iso R^{\oplus n}$ for some $n\in\N$. Then every submodule $M\substructeq F$ is free.
* Moreover, there is a basis $\tpl{x_i}_{i=1}^n$ of $F$ and non-zero elements $\tpl{a_j}_{j=1}^m$ of $R$ with $m\leq n$ and $a_j\divides a_{j+1}$ for all $1\leq j<m$ such that $\tpl{a_jx_j}_{j=1}^m$ is a basis of $M$.

```

<i>Proof.</i> We claim that for any non-trivial submodule $M\substructeq F$, there exist non-trivial $a\in R$, $x\in F$, and $y\in M$ with $y=ax$ and submodules $F'\substructeq F$ and $M'\substructeq M$ such that $M'=F'\cap M$, $F=\gen{x}\oplus F'$, and $M=\gen{y}\oplus M'$. Indeed, consider the collection $\mc{I}\coloneqq\l\{\phi\l(M\r)\substructeq R\mid\phi\in\Hom\l(F,R\r)\r\}$ of all ideals obtained as images of some $R$-module homomorphism $\phi:F\to R$. After a choice of basis $\pi:F\to R^{\oplus n}$, we see that there is some factor $\pi_i:F\to R$ with $\pi_i\!\l(y\r)\neq0$ for any non-zero $y\in M$. Thus there is a non-zero ideal in $\mc{I}$, so, since $R$ is in particular Noetherian, it has a non-zero maximal element $\alpha\l(M\r)$, where $\alpha\in\Hom\l(F,R\r)$. Since $R$ is a PID, write $\alpha\l(M\r)=\gen{a}$ for some non-zero $a\in R$. Since $a\in\alpha\l(M\r)$, let $y\in M$ be so that $\alpha\l(y\r)=a$.
* We claim that $a\divides\phi\l(y\r)$ for every $\phi\in\Hom\l(F,R\r)$. Indeed, consider the ideal $\gen{a,\phi\l(y\r)}$, which can be written as $\gen{d}$ for some $d\in R$. Observe that $a\in\gen{b}$, so $\alpha\l(M\r)\substructeq\gen{b}$. Writing $d=ra+s\phi\l(y\r)$ for $r,s\in R$, set $\psi\coloneqq r\alpha+s\phi$ and observe that $d=ra+s\phi\l(r\r)=\l(r\alpha+s\phi\r)\l(y\r)=\psi\l(y\r)\in\psi\l(M\r)$. Then $\gen{d}\substructeq\psi\l(M\r)$, so $\alpha\l(M\r)\substructeq\psi\l(M\r)$ and hence $\alpha\l(M\r)=\psi\l(M\r)$ by maximality. Thus $\gen{d}\substructeq\alpha\l(M\r)=\gen{a}$, so $a\divides d$ and hence $a\divides\phi\l(y\r)$.

Since $y\in F$, we consider it as an element $\pi\l(y\r)\eqqcolon\tpl{s_i}_{i=1}^n$ for some $s_i\in R$. Then $s_i=\pi_i\!\l(y\r)$ for all $i$, so $a\divides s_i$ for all $i$ by the above. Thus there exist $r_i\in R$ such that $ar_i=s_i$ for all $i$; set $x\coloneqq\pi^{-1}\tpl{r_i}_{i=1}^n\in F$. Then $\pi\l(y\r)=\tpl{ar_i}=a\tpl{r_i}=a\pi\l(x\r)$, so $y=ax$. Note that $a=\alpha\l(y\r)=\alpha\l(ax\r)=a\alpha\l(x\r)$, so $\alpha\l(x\r)=1$. Now, set $F'\coloneqq\ker\alpha$ and $M'\coloneqq M\cap F'$. Take $z\in F$, written as $z=\alpha\l(z\r)x+\l(z-\alpha\l(z\r)x\r)$, and observe that
$$\begin{equation}
    \alpha\l(z-\alpha\l(z\r)x\r)=\alpha\l(z\r)-\alpha\l(z\r)\alpha\l(x\r)=\alpha\l(z\r)-\alpha\l(z\r)=0.
\end{equation}$$
Thus $z-\alpha\l(z\r)x\in\ker\alpha=F'$, so $F=\gen{x}+F'$. For the sum to be direct, note that $rx\in F'$ implies that $\alpha\l(rx\r)=r\alpha\l(x\r)=0$ and hence $r=0$. If furthermore $z\in M$, then $\alpha\l(z\r)\in\alpha\l(M\r)=\gen{a}$ and hence $\alpha\l(z\r)=ca$ for some $c\in R$. Thus $z-\alpha\l(z\r)x=z-cax=z-cy\in M\cap F'=M'$, so $M=\gen{y}+M'$. The sum is direct since $\gen{y}\cap M'\subseteq\gen{x}+F'=\l\{0\r\}$. Finally, the claims follow by induction on $n$ with trivial base case $n=0$. Suppose that $M\neq\l\{0\r\}$.
* Using the lemma, write $M=\gen{y_1}\oplus M_1$ for some submodule $M_1\substructeq M$ and non-zero $y_1\in M$. If $M_1=\l\{0\r\}$, we are done. Otherwise, we continue this way so long as $M_m\neq\l\{0\r\}$ to obtain a decomposition $M=\gen{y_1}\oplus\cdots\oplus\gen{y_m}\oplus M_m$ for submodules $M_{j+1}\substructeq M_j$ and non-zero $y_j\in M_{j-1}$. Since $\tpl{y_j}_{j=1}^m$ is a linearly independent subset of $F$ with a basis of size $n$, we see that $m\leq n$ is finite and so this process must terminate. Thus $M=\bigoplus_{j=1}^m\gen{y_j}\iso R^{\oplus m}$, as desired.
* Since $R^{\oplus n}\iso R\oplus F'$, we see that $\rk_RF'=n-1$. By induction, there is a basis $\tpl{x_i}_{i=2}^n$ of $F$ and non-zero elements $\tpl{a_j}_{j=2}^m$ of $R$ with $m\leq n$ and $a_j\divides a_{j+1}$ for all $2\leq j<m$ such that $\tpl{a_jx_j}_{j=2}^m$ is a basis for $F'\cap M=M'$. But $M=\gen{y}\oplus M'=\gen{ax}\oplus M'$, from which it follows that $\tpl{a_jx_j}_{j=1}^m$ is a basis for $M$. It remains to show that $a_1\divides a_2$. Indeed, consider any $\phi\in\Hom\l(F,R\r)$ induced universally by $\phi\l(x_1\r)=\phi\l(x_2\r)=1$. Note that $\phi\l(y_1\r)=\phi\l(a_1x_1\r)=a_1\phi\l(x_1\r)=a_1$, so $a_1\in\phi\l(M\r)$ and hence $\alpha\l(M\r)\substructeq\phi\l(M\r)$. Maximality of $\alpha\l(M\r)$ in $\mc{I}$ gives us $\alpha\l(M\r)=\phi\l(M\r)$, so $a_2=a_2\phi\l(x_2\r)=\phi\l(a_2x_2\r)=\phi\l(y_2\r)\in\phi\l(M\r)=\alpha\l(M\r)=\gen{a_1}$, as desired.<span style="float:right;">$\blacksquare$</span>
