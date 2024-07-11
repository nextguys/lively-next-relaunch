# Serialization

 - Objects in lively.next (and in particular Morphs) support full serialization of the object state into a JSON format.
 - This JSON snapshot can then in turn be used to reinitialize *(deserialize)* the serialized objects into memory.
 - Since the control of the runtime in Javascript is limited (we can not yet create pure memory snapshots) there are caviats. For instance we are unable to reliably serialize closures.
 - This means the in order to be able to successfuly serialize objects in lively.next, the classes of the objects need to be particulary designed with care such that they can be correctly *revived*.
 - Correct revival is not trivial due to two reasons:
   - Invocation of setters need to be able to handle a case where a setter is triggered during deserialization vs during normal execution of a program.
     - The nature of execution between deserialization and normal execution varies heavily since normal execution usually implicitly respects certain constraints about properties (for instance property A cannot be defined before property B since it relies partially on A). Deserialization on the other hand cannot guess these implicit constraints and therefore relies on explicit knowledge of property dependencies.
     - This aspect is usually easy to handle by keeping setter logic simple and avoiding doing overly much in response to property changes.
   - Reconstruction of non serializable objects needs to be handled correctly. For instance using 3rd part libraries to archieve certain capabilities requires those objects to be reinstantiated "at once". In practice this aspect turns out to be the more tricky one, and oftern can only be approximately handled.