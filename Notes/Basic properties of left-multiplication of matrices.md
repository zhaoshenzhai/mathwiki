<div class="topSpace"></div>

Date Created: 23/05/2022 23:48:31
Tags: #Proposition

Proved by: [[Matrix multiplication (columns slash rows)]], [[Action of linear map repr under basis left-multiplication of matrix representation]], [[Inverse of linear map is linear]], [[Criteria for equality of linear maps via spanning set]], [[Identity function on a vector space is represented by the identity matrix]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider the function_
$$\begin{equation}
    \mc{L}_{m\times n}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r)\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
_for some fixed $m,n\in\N^+$. Then the following algebraic identities hold._
* _($\mc{L}$ is invertible): For all $T\in\hom\l(K^n,K^m\r)$, there exists a unique matrix $A\in\mat{m\times n}{K}$ such that_ $T=\mc{L}_{m\times n}\l(A\r)$_._
* _($\mc{L}$ is linear):_ $\mc{L}\l(\alpha A+B\r)=\alpha\mc{L}\l(A\r)+\mc{L}\l(B\r)$_ for all $A,B\in\mat{m\times n}{K}$ and $\alpha\in K$._
* _($\mc{L}$ respects matrix multiplication):_ $\mc{L}_{m\times p}\l(AC\r)=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(C\r)$_ for all $A\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$ for some fixed $p\in\N^+$._
* _($\mc{L}$ preserves identity):_ $\mc{L}_n\l(I_n\r)=\id_{K^n}$_ where_ $\mc{L}_n\coloneqq\mc{L}_{n\times n}$_._

```

_Proof_. Let $\mc{B}\coloneqq\l\{\v{e}_1,\dots,\v{e}_n\r\}$ be the standard basis of $K^n$.
* ($\mc{L}$ is invertible): We claim that $\l(\mc{L}_{m\times n}\r)^{-1}=\Phi_\mc{B}^\mc{C}$ where $\mc{C}$ is the standard basis of $K^m$.
  * ($\Phi_\mc{B}^\mc{C}\circ\mc{L}_{m\times n}=\id_{\mat{m\times n}{K}}$): Take $A\in\mat{m\times n}{K}$; we wish to show that $\l[L_A\r]_\mc{B}^\mc{C}=A$. By definition, the $j^\textrm{th}$ column of $\l[L_A\r]_\mc{B}^\mc{C}$ is
$$\begin{equation}
    \begin{aligned}
        \l[L_A\l(\v{e}_j\r)\r]_\mc{C}&=L_A\l(\v{e}_j\r) && L_A\l(\v{e}_j\r)\in K^m \\
        &=A\v{e}_j. && \textrm{Definition of $L_A$}
    \end{aligned}
\end{equation}$$
  But this is the $j^\textrm{th}$ column of $A$, so the result follows.

  * ($\mc{L}_{m\times n}\circ\Phi_\mc{B}^\mc{C}=\id_{\hom\l(K^n,K^m\r)}$): Take $T:K^n\to K^m$; we wish to show that $L_{\l[T\r]_\mc{B}^\mc{C}}=T$. Indeed, for any $\v{x}\in K^n$, we have
$$\begin{equation}
    \begin{aligned}
        L_{\l[T\r]_\mc{B}^\mc{C}}\l(\v{x}\r)&=\l[T\r]_\mc{B}^\mc{C}\v{x} && \textrm{Definition of $L_{\l[T\r]_\mc{B}^\mc{C}}$} \\
        &=\l[T\r]_\mc{B}^\mc{C}\l[\v{x}\r]_\mc{B} && \v{x}\in K^n \\
        &=\l[T\l(\v{x}\r)\r]_\mc{C} && \textrm{Action of linear map} \\
        &=T\l(\v{x}\r). && T\l(\v{x}\r)\in K^m
    \end{aligned}
\end{equation}$$

* ($\mc{L}$ is linear): This follows from the fact that $\Phi_\mc{B}^\mc{C}$ is linear, so its inverse is also linear.
* ($\mc{L}$ respects matrix multiplication): Take $A\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$ for some fixed $p\in\N^+$. Observe that
$$\begin{equation}
    \mc{L}_{m\times p}\l(AC\r)=L_{AC}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(C\r)=L_A\circ L_C,
\end{equation}$$
so it suffices to show that $L_{AC}=L_A\circ L_C$. Since $\mc{B}$ is a basis of $K^n$, it further suffices to show that
$$\begin{equation}
    L_{AC}\l(\v{e}_j\r)=\l(L_A\circ L_C\r)\l(\v{e}_j\r)
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. By definition, we have $L_{AC}\l(\v{e}_j\r)=\l(AC\r)\v{e}_j$ and $\l(L_A\circ L_C\r)\l(\v{e}_j\r)=A\l(C\v{e}_j\r)$, and since the $j^\textrm{th}$ column $\l(AC\r)\v{e}_j$ of $AC$ is $A\v{c}_j$ where $\v{c}_j=C\v{e}_j$ is the $j^\textrm{th}$ column of $C$, the result follows.
* ($\mc{L}$ preserves identity): Since $I_n=\l[\id_{K^n}\r]_\mc{B}$, we see that
$$\begin{equation}
    \mc{L}_n\l(I_n\r)=\mc{L}_n\l(\l[\id_{K^n}\r]_\mc{B}\r)=\mc{L}_n\l(\Phi_\mc{B}^\mc{B}\l(\id_{K^n}\r)\r)=\id_{K^n},
\end{equation}$$
where the last expression evaluates to $\id_{K^n}$ since $\mc{L}_n$ and $\Phi_\mc{B}^\mc{B}$ are inverses of each other. The result follows.<span style="float:right;">$\blacksquare$</span>
