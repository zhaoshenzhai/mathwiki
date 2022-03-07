<br />
<br />

Date Created: 07/03/2022 17:01:43
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_A **discrete category** is a category $\cat{C}$ whose only morphisms are identity morphisms; that is, if_
$$\begin{equation}
    \fa X,Y\in\obj\l(\cat{C}\r):\hom\l(X,Y\r)=
        \begin{dcases}
            \l\{\id_X\r\} & \textrm{if }X=Y\\
            \em & \textrm{else.}
        \end{dcases}
\end{equation}$$

```

**Remark.** Let $X$ be a set. Then the preorder category $\cat{C}\l\langle X,=\r\rangle$, where $=$ is regarded as a binary relation on $X$, is a discrete category. This is trivial to see for by definition $\hom\l(x,y\r)=\l\{\l\langle x,y\r\rangle\r\}=\l\{\l\langle x,x\r\rangle\r\}=\l\{\id_x\r\}$ if $x=y$ and $\hom\l(x,y\r)=\em$ otherwise.<span style="float:right;">$\blacklozenge$</span>
