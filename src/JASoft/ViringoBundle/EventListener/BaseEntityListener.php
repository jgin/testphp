<?php

namespace JASoft\ViringoBundle\EventListener;

use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use JASoft\ViringoBundle\Entity\BaseEntity;
use JASoft\ViringoBundle\Repository\BaseEntityRepository;

/**
 * Description of BaseEntityListener
 *
 * @author gin
 */
class BaseEntityListener {
    
    public function onFlush(OnFlushEventArgs $args) {
        $now=new \DateTime();
        $ip=$_SERVER['REMOTE_ADDR'];
        
        $uow=$args->getEntityManager()->getUnitOfWork();
        
        foreach ($uow->getScheduledEntityInsertions() AS $entity) {
            if ($entity instanceof BaseEntity) {
                $entity->setCreatedAt($now);
                //$entity->setUpdatedAt($now);
                $entity->setCreatedByIp($ip);
                //$entity->setUpdatedByIp($ip);
                $entity->setDeleted(false);
                
                // FIXME: Quitar esto de usuarios
                $entity->setCreatedByUser(0);
                
                $cmd=$args->getEntityManager()->getClassMetadata(get_class($entity));
                $uow->recomputeSingleEntityChangeSet($cmd, $entity);
                
                $repository=$args->getEntityManager()->getRepository(get_class($entity));
                if ($repository instanceof BaseEntityRepository) {
                    $repository->onFlush($args);
                }
            }
        }

        foreach ($uow->getScheduledEntityUpdates() AS $entity) {
            if ($entity instanceof BaseEntity) {
                if ($entity->isDeleted()) {
                    $entity->setDeletedAt($now);
                    $entity->setDeletedByIp($ip);
                } else {
                    $entity->setUpdatedAt($now);
                    $entity->setUpdatedByIp($ip);
                }
                $cmd=$args->getEntityManager()->getClassMetadata(get_class($entity));
                $uow->recomputeSingleEntityChangeSet($cmd, $entity);
            }
            $repository=$args->getEntityManager()->getRepository(get_class($entity));
            if ($repository instanceof BaseEntityRepository) {
                $repository->onFlush($args);
            }
        }
        
//
//        foreach ($uow->getScheduledEntityDeletions() AS $entity) {
//            if ($entity instanceof BaseEntity) {
////                $updatedAtOldValue=$entity->getUpdatedAt();
//                $entity->setUpdatedAt($now);
////                $uow->propertyChanged($entity, 'updatedAt', $updatedAtOldValue, $now);
//                $cmd=$args->getEntityManager()->getClassMetadata(get_class($entity));
//                $uow->recomputeSingleEntityChangeSet($cmd, $entity);
//            }
//        }
        
//        $uow->computeChangeSets();

//        foreach ($uow->getScheduledCollectionDeletions() AS $col) {
//
//        }
//
//        foreach ($uow->getScheduledCollectionUpdates() AS $col) {
//
//        }
    }
//    
//    public function postLoad(LifecycleEventArgs $args) {
//        $this->prePersist($args);
//    }
    
    public function prePersist(LifecycleEventArgs $args) {
        $entity=$args->getEntity();
        $repository=$args->getEntityManager()->getRepository(get_class($entity));
        if ($repository instanceof BaseEntityRepository) {
            $repository->prePersist($args);
        }
    }
    
    public function preUpdate(PreUpdateEventArgs $args) {
        $entity=$args->getEntity();
        $repository=$args->getEntityManager()->getRepository(get_class($entity));
        if ($repository instanceof BaseEntityRepository) {
            $repository->preUpdate($args);
        }
    }
    
}
