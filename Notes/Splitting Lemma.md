<div class="topSpace"></div>

Date Created: 24/07/2023 22:07:23
References: #Ref/Alu09 #Ref/Hat02
Tags: #Type/Proposition #Topic/Rings_and_Modules/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Splitting Lemma).

A short exact sequence $0\to A\overset{\phi}{\to} B\overset{\psi}{\to}C\to0$ of $R$-modules is left-split iff it is right-split, which occurs iff there is an isomorphism $f:B\to A\oplus C$ making
![[Images/2023-07-24_222417/image.svg|300]]commute.

```

<i>Proof.</i> If $B\iso A\oplus C$ and the diagram commutes, we define the retraction $r:B\to A$ as $f$ followed by the projection $A\oplus C\onto A$. Then $r\circ\phi$ is the projection of $f\circ\phi$ onto $A$, which is the identity. Similarly, we define the section $s:C\to B$ the injection $C\into A\oplus C$ followed by $f^{-1}$. Then $\psi\circ s$ is $\psi\circ f^{-1}$ of the injection, which is again the identity. We now show the converse directions.
* Suppose that there is an $R$-module homomorphism $r:B\to A$ so that $r\circ\phi=\id_A$. Define $f\l(b\r)\coloneqq\tpl{r\l(b\r),\psi\l(b\r)}$, which is clearly an $R$-module homomorphism. If $b\in\ker f$, then $r\l(b\r)=\psi\l(b\r)=0$ and so $b\in\ker\psi=\im\phi$. Thus $b=\phi\l(a\r)$ for some $a\in A$, so $r\l(b\r)=r\l(\phi\l(a\r)\r)=a=0$ and hence $b=0$. Thus $\ker f=\l\{0\r\}$, so it is injective. To show that $f$ is surjective, take $\tpl{a,c}\in A\oplus C$. Since $\psi$ is surjective, $\psi\l(b'\r)=c$ for some $b'\in B$. Set $b\coloneqq b'+\phi\l(a-r\l(b'\r)\r)$ and observe that $\psi\l(b\r)=\psi\l(b'\r)=c$ and that $r\l(b\r)=r\l(b'\r)+a-r\l(b'\r)=a$. Thus $f\l(b\r)=\tpl{a,c}$, as desired. Finally, we have
$$\begin{equation}
    f\l(\phi\l(a\r)\r)=\tpl{r\l(\phi\l(a\r)\r),\psi\l(\phi\l(a\r)\r)}=\tpl{a,0}=i\l(a\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ p\l(f\l(b\r)\r)=p\tpl{r\l(b\r),\psi\l(b\r)}=\psi\l(b\r).
\end{equation}$$
* Suppose that there is an $R$-module homomorphism $s:C\to B$ so that $\psi\circ s=\id_C$. Define $g:A\oplus C\to B$ mapping $\tpl{a,c}\mapsto\phi\l(a\r)+s\l(c\r)$; we will show that $g$ is invertible, and define $f\coloneqq g^{-1}$. Indeed, if $\tpl{a,c}\in\ker g$, then $\phi\l(a\r)+s\l(c\r)=0$. Thus $\psi\l(\phi\l(a\r)+s\l(c\r)\r)=0$, so $c=0$ and hence $a=0$ too. To show that $f$ is surjective, take $b\in B$ and observe that $\psi\l(b-s\l(\psi\l(b\r)\r)\r)=\psi\l(b\r)-\psi\l(b\r)=0$, so $b-s\l(\psi\l(b\r)\r)\in\ker\psi=\im\phi$ and hence $b-s\l(\psi\l(b\r)\r)=\phi\l(a\r)$ for some $a\in A$. Then $g\l(a,\psi\l(b\r)\r)=\phi\l(a\r)+s\l(\psi\l(b\r)\r)=b-s\l(\psi\l(b\r)\r)+s\l(\psi\l(b\r)\r)=b$, as desired. Thus $g$ is invertible, so set $f\coloneqq g^{-1}$. Finally, we have
$$\begin{equation}
    g\l(i\l(a\r)\r)=g\l(a,0\r)=\phi\l(a\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \psi\l(g\l(a,c\r)\r)=\psi\l(\phi\l(a\r)+s\l(c\r)\r)=c=p\l(a,c\r).\qedin
\end{equation}$$
