<div class="topSpace"></div>

Date Created: 10/03/2022 17:35:45
Tags: #Type/Proposition #Topic/Category_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\cat{C}$ be a category and fix $C\in\Obj\l(\cat{C}\r)$. Then the coslice category $\l(C\downarrow\cat{C}\r)$ is isomorphic to the comma category $\l(\ms{I}\downarrow\Id_\cat{C}\r)$
![[Images/2022-03-10_173659/image.svg|140]]

where $\ms{I}:\bf{1}\to\cat{C}$ is the inclusion functor and $\bf{1}$ is the discrete category with $\Obj\l(\bf{1}\r)\coloneqq\l\{C\r\}$ and $\Hom\l(\bf{1}\r)\coloneqq\l\{\id_C\r\}$.

```

<i>Proof.</i> The obvious functor to consider is $\ms{F}:\l(C\downarrow\cat{C}\r)\to\l(\ms{I}\downarrow\Id_\cat{C}\r)$ mapping
$$\begin{equation}
    \ms{F}^{\Obj}\tpl{X,f}\coloneqq\tpl{C,X,f}\ \ \ \ \textrm{and}\ \ \ \ \ms{F}^{\Hom}\l(\psi\r)\coloneqq\tpl{\id_C,\psi}
\end{equation}$$
for all $X,X'\in\Obj\l(\cat{C}\r)$, $f\in\Hom_\cat{C}\!\l(C,X\r)$, $f'\in\Hom_\cat{C}\!\l(C,X'\r)$, and $\psi:\tpl{X,f}\to\tpl{X',f'}$; we need to verify that this indeed constitutes a functor and find a (strict) inverse thereof. We first verify the data of $\ms{F}$.
* Note that $\dom\ms{F}^{\Obj}$, in the sense of class functions, is indeed the class $\Obj\l(C\downarrow\cat{C}\r)$ since $\tpl{X,f}$ is a general element thereof; similarly for $\dom\ms{F}^{\Hom}$.
* For $\cdm\ms{F}^{\Obj}$, it is clear that $C\in\Obj\l(\bf{1}\r)$, so $f\in\Hom_\cat{C}\!\l(C,X\r)=\Hom_\cat{C}\!\l(\ms{I}\l(C\r),\Id_\cat{C}\l(X\r)\r)$ and thus $\tpl{C,X,f}\in\Obj\l(\ms{I}\downarrow\Id_\cat{C}\r)$.
* For $\cdm\ms{F}^{\Hom}$, we need to verify that the diagram
![[Images/2022-03-10_175541/image.svg|200]]commutes, but this reduces to checking that $f'=\psi\circ f$ which holds since $\psi\in\Hom_{\l(C\downarrow\cat{C}\r)}\l(\tpl{X,f},\tpl{X',f'}\r)$.

We now need to check the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $\tpl{X,f}\in\Obj\l(C\downarrow\cat{C}\r)$; we need to prove that $\ms{F}^{\Hom}\l(\id_{\tpl{X,f}}\r)=\id_{\ms{F}^{\Obj}\tpl{X,f}}$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\Hom}\l(\id_{\tpl{X,f}}\r)&=\ms{F}^{\Hom}\l(\id_X\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of $\l(C\downarrow\cat{C}\r)$-identity}\\
        &=\tpl{\id_C,\id_X}&&\textrm{Definition of $\ms{F}^{\Hom}$}\\
        &=\id_{\tpl{C,X,f}}&&\textrm{Definition of $\l(\ms{I}\downarrow\Id_\cat{C}\r)$-identity}\\
        &=\id_{\ms{F}^{\Obj}\tpl{X,f}}.&&\textrm{Definition of $\ms{F}^{\Obj}$}
    \end{alignedat}
\end{equation}$$
* ($\axifunctor[2]$): Take $\tpl{X_i,f_i}\in\Obj\l(C\downarrow\cat{C}\r)$ for $i\in\l\{1,2,3\r\}$ and morphisms $\psi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\psi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$; we need to prove that $\ms{F}^{\Hom}\l(\psi'\circ\psi\r)=\ms{F}^{\Hom}\l(\psi'\r)\circ\ms{F}^{\Hom}\l(\psi\r)$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\Hom}\l(\psi'\circ\psi\r)&=\tpl{\id_C,\psi'\circ\psi}&&\textrm{Definition of $\ms{F}^{\Hom}$}\\
        &=\tpl{\id_C\circ\id_C,\psi'\circ\psi}&&\textrm{$\axicat[2]$ of $\cat{C}$}\\
        &=\tpl{\id_C,\psi'}\circ\tpl{\id_C,\psi}&&\textrm{Definition of $\l(\ms{I}\downarrow\Id_\cat{C}\r)$-composite}\\
        &=\ms{F}^{\Hom}\l(\psi'\r)\circ\ms{F}^{\Hom}\l(\psi\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of $\ms{F}^{\Hom}$}
    \end{alignedat}
\end{equation}$$

The candidate inverse functor $\ms{G}:\l(\ms{I}\downarrow\Id_\cat{C}\r)\to\l(C\downarrow\cat{C}\r)$ is also defined in the obvious way, mapping
$$\begin{equation}
    \ms{G}^{\Obj}\tpl{C,X,f}\coloneqq\tpl{X,f}\ \ \ \ \textrm{and}\ \ \ \ \ms{G}^{\Hom}\tpl{\phi,\psi}\coloneqq\psi
\end{equation}$$
for all $X,X'\in\Obj\l(\cat{C}\r)$, $f\in\Hom_\cat{C}\!\l(C,X\r)$, $f'\in\Hom_\cat{C}\!\l(C,X'\r)$, and $\tpl{\phi,\psi}:\tpl{C,X,f}\to\tpl{C,X',f'}$; the important points that justify this construction are that $C$ is the unique object in $\Obj\l(\bf{1}\r)$ and, with $\phi:C\to C$ being a morphism in $\bf{1}$, $\phi$ is the identity morphism $\id_C$. The fact that $\ms{G}$ satisfies the axioms of a covariant functor is essentially the same as above, just chasing definitions. It remains to check that $\ms{G}=\ms{F}^{-1}$.
* ($\ms{G}$ is a left-inverse of $\ms{F}$): Take $\tpl{X,f}\in\Obj\l(C\downarrow\cat{C}\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\Obj}\tpl{X,f}&=\ms{G}^{\Obj}\l(\ms{F}^{\Obj}\tpl{X,f}\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\Obj}\tpl{C,X,f}&&\textrm{Definition of $\ms{F}^{\Obj}$}\\
        &=\tpl{X,f}.&&\textrm{Definition of $\ms{G}^{\Obj}$}
    \end{alignedat}
\end{equation}$$
Similarly, take $\psi:\tpl{X,f}\to\tpl{X',f'}$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\Hom}\l(\psi\r)&=\ms{G}^{\Hom}\l(\ms{F}^{\Hom}\l(\psi\r)\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\Hom}\tpl{\id_C,\psi}&&\textrm{Definition of $\ms{F}^{\Hom}$}\\
        &=\psi.&&\textrm{Definition of $\ms{G}^{\Hom}$}
    \end{alignedat}
\end{equation}$$
* ($\ms{G}$ is a right-inverse of $\ms{F}$): The object part of the proof follows as above. For the morphism part, take $\tpl{\phi,\psi}:\tpl{C,X,f}\to\tpl{C,X',f'}$, which is a general morphism in $\l(\ms{I}\downarrow\Id_\cat{C}\r)$, and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\ms{G}\r)^{\Hom}\tpl{\phi,\psi}&=\ms{F}^{\Hom}\l(\ms{G}^{\Hom}\tpl{\phi,\psi}\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{F}^{\Hom}\l(\psi\r)&&\textrm{Definitionn of $\ms{G}^{\Hom}$}\\
        &=\tpl{\id_C,\psi}&&\textrm{Definition of $\ms{F}^{\Hom}$}\\
        &=\tpl{\phi,\psi}&&\phi=\id_C
    \end{alignedat}
\end{equation}$$
where the last equality follows from $\phi\in\Hom\l(\bf{1}\r)=\l\{\id_C\r\}$.<span style="float:right;">$\blacksquare$</span>
