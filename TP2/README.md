# M413 - TD2 : Réponses aux Questions

## 6 - Exercice 1 : Les évènements

### 6.1 - Sélection d’un Objet

- On a pris l'élement de plus haut niveau en prenant l'objet documentElement de l'objet document (celui qui gère tous les objets de la page). Pour ajouter l'écouteur d'évènement, on a juste mis un add listener sur l'objet comme ceci : ```objet.addEventListener('click', select);``` où objet est l'élement que l'on recupère grâce à la ligne d'au dessus.

- La propriété target renvoie l'élément sur lequel l'événement a été déclenché, tandis que la propriété currentTarget renvoie l'élément sur lequel l'écouteur d'événement a été attaché. Dans notre cas, il faudrait adapter un petit peu notre code pour qu'il fonctionne avec currentTarget.

### 6.2 - Insertion d'objets

- J'ai d'abord recupéré le parent de target, ensuite j'ai crée l'élement avec les informations du div et j'ai inséré dans le parent de target l'element juste avant target. Le tout est appelé à la fin de la fonction select2.

- On recupère le div dans une variable et on teste si target n'est pas égal à div ou à un de ses enfants comme ceci : ```target.parentNode !== div && target !== div```
