<?php

namespace JASoft\ViringoBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;

/**
 * BaseEntityRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below
 */
abstract class BaseEntityRepository extends EntityRepository
{
    public function prePersist(LifecycleEventArgs $args){}
    public function preUpdate(PreUpdateEventArgs $args){}
    public function onFlush(OnFlushEventArgs $args){}
    
    /**
     * Elimina una entidad de forma l�gica
     * @param \JASoft\ViringoBundle\Entity\BaseEntity $entity
     */
    public function softDelete($entity) {
        $entity->setDeletedAt(new \DateTime());
        $entity->setDeletedByIp($_SERVER['REMOTE_ADDR']);
        $entity->setIsDeleted(true);
        $this->_em->persist($entity);
    }
    
    public function advancedFind($criteria) {
        if (!empty($criteria) && !is_array($criteria)) return null;
        
        /**
         * Tipos de comparaciones:
         * Cadenas (like) * Posici�n?? =, <, <=, >, >=
         * N�meros y fechas (como cadenas like, como valores =, <, <=, >, >=)
         */
        
        $qb = $this->createQueryBuilder('i');
        
        foreach ($criteria as $f=>$c) {
            $qb->andWhere($qb->expr()->like("LOWER(i.$f)", ":$f"));
            $qb->setParameter($f, strtolower("%$c%"));
        }
        
//        var_dump($qb->getQuery()->getDQL());
        
        return $qb->getQuery()->getResult();
    }
    
    public function findAll($orderBy=null) {
        if (empty($orderBy))
            return parent::findAll();
        else {
            return $this->findBy(array(), $orderBy);
        }
    }
}
